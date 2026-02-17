import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const ContactFormSchema = z.object({
  name: z.string().min(1).max(100),
  company: z.string().max(100).optional().default(''),
  phone: z.string().regex(/^[0-9\s+()-]+$/).min(10).max(20),
  email: z.string().email().max(255),
  website: z.string().url().max(255).optional().or(z.literal('')).default(''),
  objective: z.enum([
    'Créer un nouveau site',
    'Refondre mon site existant',
    'Améliorer mon SEO',
    'Optimiser ma page Google',
    'Autre',
  ]),
  message: z.string().max(5000).optional().default(''),
})

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const webhookUrl = Deno.env.get('N8N_WEBHOOK_URL')
    
    if (!webhookUrl) {
      console.error('N8N_WEBHOOK_URL not configured')
      return new Response(
        JSON.stringify({ success: false, error: 'Server configuration error' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

    const rawData = await req.json()
    const parseResult = ContactFormSchema.safeParse(rawData)

    if (!parseResult.success) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid form data' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    const validated = parseResult.data

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: validated.name,
        company: validated.company,
        phone: validated.phone,
        email: validated.email,
        website: validated.website,
        objective: validated.objective,
        message: validated.message,
        submittedAt: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      console.error(`n8n webhook returned ${response.status}`)
      await response.text()
      return new Response(
        JSON.stringify({ success: false, error: 'Failed to process submission' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

    const result = await response.json()

    return new Response(
      JSON.stringify({ success: true, message: result.message || 'Sent successfully' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (error) {
    console.error('Error sending to n8n:', error instanceof Error ? error.message : 'Unknown error')
    return new Response(
      JSON.stringify({ success: false, error: 'An unexpected error occurred' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})
