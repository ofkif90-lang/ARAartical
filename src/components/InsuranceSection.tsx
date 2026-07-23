import { ExternalLink, Check, X, Lightbulb, TrendingUp } from 'lucide-react';
import { type InsuranceCategory } from '../data/insuranceData';
import { Reveal } from './Reveal';

interface InsuranceSectionProps {
  category: InsuranceCategory;
  index: number;
}

export function InsuranceSection({ category, index }: InsuranceSectionProps) {
  const isReversed = index % 2 === 1;

  return (
    <section
      id={category.id}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Section background accent */}
      <div className={`absolute top-0 ${isReversed ? 'right-0' : 'left-0'} w-1/3 h-full bg-gradient-to-${isReversed ? 'l' : 'r'} from-primary-50/50 to-transparent pointer-events-none`} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with image and title */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center mb-16 ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Image */}
          <Reveal animation={isReversed ? 'reveal-right' : 'reveal-left'} className={isReversed ? 'lg:col-start-2' : ''}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <img
                  src={category.sectionImage}
                  alt={category.title}
                  className="w-full h-[300px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-3 py-1 rounded-full glass text-xs font-semibold text-primary-700 mb-2">
                    {category.title}
                  </span>
                  <h2 className="text-white text-2xl lg:text-3xl font-bold font-display">
                    {category.articleTitle}
                  </h2>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Title and intro */}
          <Reveal animation={isReversed ? 'reveal-left' : 'reveal-right'} delay="delay-200" className={isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 rounded-full animated-gradient-bg" />
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                Section {index + 1}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-display text-slate-900">
              {category.articleTitle}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {category.intro}
            </p>
            {/* SEO keywords */}
            <div className="flex flex-wrap gap-2">
              {category.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-medium border border-primary-100"
                >
                  #{keyword.replace(/\s+/g, '_')}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="gradient-divider mb-16" />

        {/* Companies grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {category.companies.map((company, companyIndex) => (
            <Reveal
              key={company.name}
              animation="reveal-scale"
              delay={`delay-${((companyIndex % 2) + 1) * 100}`}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover-lift transition-all duration-300 h-full">
                {/* Company header bar */}
                <div
                  className="px-6 py-4 flex items-center justify-between"
                  style={{ background: `linear-gradient(135deg, ${company.color}, ${company.color}dd)` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{company.logo}</span>
                    <h3 className="text-xl font-bold text-white font-display">{company.name}</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-sm">
                    {company.rating}
                  </span>
                </div>

                <div className="p-6">
                  {/* Cost and best for */}
                  <div className="grid grid-cols-1 gap-3 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide w-20">Cost</span>
                      <span className="text-sm font-semibold text-slate-800">{company.avgCost}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide w-20">Best For</span>
                      <span className="text-sm text-slate-700">{company.bestFor}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Key Features</h4>
                    <ul className="space-y-1.5">
                      {company.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pros and cons */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                      <h4 className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-2">Pros</h4>
                      <ul className="space-y-1">
                        {company.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                            <Check className="w-3 h-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-rose-500 uppercase tracking-wide mb-2">Cons</h4>
                      <ul className="space-y-1">
                        {company.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                            <X className="w-3 h-3 text-rose-400 flex-shrink-0 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Official website link */}
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Visit Official Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Comparison table */}
        <Reveal animation="reveal" threshold={0.1}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 font-display text-slate-900 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-primary-600" />
              Comparison Table
            </h3>
            <div className="overflow-x-auto rounded-2xl shadow-lg border border-slate-100">
              <table className="comparison-table w-full">
                <thead>
                  <tr>
                    {category.comparisonHeaders.map((header) => (
                      <th key={header}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {category.comparisonRows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className={cellIndex === 0 ? 'font-semibold text-slate-800' : 'text-slate-600'}>
                          {cellIndex === row.length - 1 ? (
                            <span className="text-primary-600 font-medium">{cell}</span>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Tips section */}
        <Reveal animation="reveal" threshold={0.1}>
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 lg:p-8 mb-16 border border-primary-100">
            <h3 className="text-2xl font-bold mb-6 font-display text-slate-900 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-accent-500" />
              Tips for Choosing the Right {category.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {category.tips.map((tip, tipIndex) => (
                <div
                  key={tipIndex}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-primary-500 to-accent-400 text-white text-xs font-bold flex items-center justify-center">
                    {tipIndex + 1}
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Conclusion */}
        <Reveal animation="reveal" threshold={0.1}>
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 animated-gradient-bg opacity-95" />
            <div className="relative p-8 lg:p-10">
              <h3 className="text-2xl font-bold mb-4 font-display text-white">
                Conclusion — Best {category.title} Options for 2026
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                {category.conclusion}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
