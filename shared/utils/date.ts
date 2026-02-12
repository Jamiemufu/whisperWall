export const formatDateShort = (input: string | Date): string => {
  const d = new Date(input);
  const now = new Date();

  const startOf = (t: Date) => new Date(t.getFullYear(), t.getMonth(), t.getDate());
  const daysDiff = Math.round((startOf(now).getTime() - startOf(d).getTime()) / 86400000);

  const time = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric' }).format(d);
  if (daysDiff === 0) return `Today ${time}`;
  if (daysDiff === 1) return `Yesterday ${time}`;
  if (daysDiff < 7) return `${daysDiff} days ago`;
  return new Intl.DateTimeFormat('en-US', {
    month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'
  }).format(d);
}