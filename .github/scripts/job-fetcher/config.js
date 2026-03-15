/**
 * New-Grad-Healthcare-Jobs-2026 Configuration
 *
 * Purpose: Per-repo customization for shared job board library
 * Version: 1.1 (2026-03-12 — HEALTHCARE-CONFIG-FIX: nursing→healthcare branding)
 *
 * Template Variables:
 * - {totalCompanies} - Replaced with unique company count
 * - {currentJobs} - Replaced with active job count
 */

module.exports = {
  // Schema version
  version: 1,

  // Image configuration (repoPrefix drives image filenames)
  repoPrefix: 'hcj',
  headingImageAlt: 'Healthcare Jobs 2026 - Illustration of healthcare professionals.',

  // Branding text
  title: 'Healthcare Jobs 2026',
  tagline: '',  // No tagline for SEO repos

  // Description paragraphs (with template variables)
  descriptionLine1: '🚀 Real-time healthcare, nursing, and medical jobs from {totalCompanies}+ top companies and healthcare facilities. Updated every 15 minutes with {currentJobs}+ fresh opportunities for new graduates, nursing students, and entry-level healthcare professionals.',
  descriptionLine2: '🎯 Includes roles across top healthcare systems, hospital networks, medical staffing agencies, and clinical settings.',

  // Note box
  noteType: 'TIP',
  noteText: '🛠 Help us grow! Add new jobs by submitting an issue! View contributing steps [here](CONTRIBUTING-GUIDE.md).',

  // Section headers
  jobsSectionHeader: 'Fresh Healthcare Jobs 2026',

  // Feature flags
  features: {
    internships: false,
    moreResources: true
  },

  // Job categorization — fallback for jobs not matching any keyword in job_categories.json
  defaultCategory: 'general_healthcare'
};
