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

const weeklyPlan: ProductPlan = { id: 'weekly', label: '1 Week', priceUsd: 14, priceNote: 'USD / 7 days' };
const monthlyPlan: ProductPlan = { id: 'monthly', label: 'Monthly', priceUsd: 35, priceNote: 'USD / 31 days' };
const lifetimePlan: ProductPlan = {
  id: 'lifetime',
  label: 'Lifetime',
  priceUsd: 150,
  priceNote: 'USD · one-time',
  recommended: true,
  badge: 'Best value',
};

const standardPlans: ProductPlan[] = [monthlyPlan, lifetimePlan];

/** No lifetime option, so the month plan stays preselected. */
const weekAndMonthPlans: ProductPlan[] = [weeklyPlan, { ...monthlyPlan, recommended: true }];

/** Lifetime is the highlighted plan whenever it is offered. */
const weekMonthLifetimePlans: ProductPlan[] = [weeklyPlan, monthlyPlan, lifetimePlan];

export function getProductPlans(productSlug: string): ProductPlan[] {
  if (productSlug === 'hwid-spoofer') return weekAndMonthPlans;
  if (productSlug === 'skin-changer' || productSlug === 'ugc') return weekMonthLifetimePlans;
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
