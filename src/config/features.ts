import { type FeatureFlag } from '@/types/features'

export const FEATURE_FLAGS: Record<string, FeatureFlag> = {
  AI_FEATURES: {
    name: 'AI_FEATURES',
    description: 'Enable AI-powered features like prompt suggestions and analysis',
    enabled: process.env.NEXT_PUBLIC_ENABLE_AI_FEATURES === 'true',
    defaultValue: false,
  },
  SOCIAL_FEATURES: {
    name: 'SOCIAL_FEATURES',
    description: 'Enable social features like sharing and collaboration',
    enabled: process.env.NEXT_PUBLIC_ENABLE_SOCIAL_FEATURES === 'true',
    defaultValue: true,
  },
  MAINTENANCE_MODE: {
    name: 'MAINTENANCE_MODE',
    description: 'Enable maintenance mode to show maintenance page',
    enabled: process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true',
    defaultValue: false,
  },
}

export const isFeatureEnabled = (featureName: string): boolean => {
  const feature = FEATURE_FLAGS[featureName]
  return feature ? feature.enabled : false
}