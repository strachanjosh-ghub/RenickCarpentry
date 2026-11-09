/**
 * Genuine client testimonials ONLY — with the client's written permission.
 * Never write, paraphrase-into-existence, or "improve" a review. Leave empty until real ones exist.
 * Example entry: { quote: '…exact words…', name: 'Sarah', suburb: 'Highton', project: 'Kitchen renovation', serviceSlug: 'kitchen-renovations-geelong', permission: true }
 */
export type Testimonial = { quote: string; name: string; suburb?: string; project?: string; serviceSlug?: string; permission: true };
export const testimonials: Testimonial[] = [];
export const showTemplates = process.env.NEXT_PUBLIC_SHOW_TEMPLATES !== 'false';
