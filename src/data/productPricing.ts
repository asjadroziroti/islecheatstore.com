export type ProductPlanId = 'weekly' | 'monthly' | 'lifetime' | 'onetime';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  priceUsd: number;
  priceNote: string;
  /** Shown on the checkout card, and used as the preselected plan. */
  recommended?: boolean;
  badge?: string;
}

const monthlyPlan: ProductPlan = { id: 'monthly', label: 'Monthly', priceUsd: 35, priceNote: 'USD / 31 days' };
const hwidMonthlyPlan: ProductPlan = { id: 'monthly', label: 'Monthly', priceUsd: 50, priceNote: 'USD / 31 days' };
const lifetimePlan: ProductPlan = {
  id: 'lifetime',
  label: 'Lifetime',
  priceUsd: 150,
  priceNote: 'USD · one-time',
  recommended: true,
  badge: 'Best value',
};

const standardPlans: ProductPlan[] = [monthlyPlan, lifetimePlan];
const hwidPlans: ProductPlan[] = [
  { ...hwidMonthlyPlan, recommended: true },
  { ...lifetimePlan, recommended: false, badge: undefined },
];

export function getProductPlans(productSlug: string): ProductPlan[] {
  if (productSlug === 'hwid-spoofer') return hwidPlans;
  return standardPlans;
}

export function getFeaturedPlan(productSlug: string): ProductPlan | undefined {
  const plans = getProductPlans(productSlug);
  return plans.find((plan) => plan.recommended) ?? plans[0];
}

export function formatPlanPrice(usd: number): string {
  return `$${usd}`;
}

export function checkoutUrlWithPlan(baseUrl: string, planId: ProductPlanId): string {
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}plan=${planId}`;
}
