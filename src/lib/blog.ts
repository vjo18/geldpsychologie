export const categoryMap = {
  'geldpsychologie': '🧠 Geldpsychologie',
  'beleggen-begrijpen': '📈 Beleggen begrijpen',
  'financiele-keuzes': '🧭 Financiële keuzes',
  'mentale-modellen': '🧩 Mentale modellen'
} as const;

export type BlogCategory = keyof typeof categoryMap;

export const categoryList = Object.entries(categoryMap).map(([key, label]) => ({
  key: key as BlogCategory,
  label
}));
