import type { WAFRuleGroupPayload } from '@/features/waf/types';

export type FeedbackState = {
  tone: 'success' | 'danger' | 'info';
  message: string;
};

export type WAFTab = 'basic' | 'lists' | 'pow' | 'block';
export type RuleListType = 'whitelist' | 'blacklist';
export type RuleDimension = 'ip' | 'country';
export type ListFieldKey =
  | 'ip_whitelist'
  | 'ip_blacklist'
  | 'country_whitelist'
  | 'country_blacklist';

export type CountryOption = {
  code: string;
  zhName: string;
  label: string;
  searchText: string;
};

export type RuleModalState = {
  open: boolean;
  listType: RuleListType;
  dimension: RuleDimension;
  ipValue: string;
  countryValues: string[];
};

export type RuleListRenderable = Pick<
  WAFRuleGroupPayload,
  | 'ip_whitelist'
  | 'ip_blacklist'
  | 'country_whitelist'
  | 'country_blacklist'
  | 'region_whitelist'
  | 'region_blacklist'
>;
