
import React from 'react';

const Reference: React.FC = () => {
  const references = [
    { id: 'ref1', title: 'Structure-based design of a potent GLP1R agonist.', journal: 'Nature Communications', impact: '14.9', year: '2023' },
    { id: 'ref2', title: 'Automated patch clamp for ion channel drug discovery.', journal: 'Journal of Pharmacology', impact: '5.2', year: '2024' },
    { id: 'ref3', title: 'EFC assays for monitoring PD-1 internalisation.', journal: 'Scientific Reports', impact: '4.6', year: '2022' },
    { id: 'ref4', title: 'Targeted protein degradation of BRD4 using PROTACs.', journal: 'Cell', impact: '66.8', year: '2023' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-4">参考文献库 (References)</h1>
        <p className="text-slate-600 text-lg">汇集使用 Eurofins DiscoverX 产品发表的高水平学术成果。</p>
        <div className="h-1 w-20 bg-[#4B827E] mt-6"></div>
      </div>

      <div className="space-y-6">
        {references.map(ref => (
          <div key={ref.id} className="bg-white p-6 rounded-xl border-l-8 border-[#4B827E] shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex-grow">
              <h4 className="text-lg font-bold text-[#1C2C5E] mb-1">"{ref.title}"</h4>
              <p className="text-slate-500 text-sm italic">{ref.journal} ({ref.year})</p>
            </div>
            <div className="shrink-0 flex items-center gap-4">
              <div className="text-center bg-slate-50 px-4 py-2 rounded">
                <span className="block text-[10px] font-bold text-slate-400 uppercase">Impact</span>
                <span className="font-bold text-[#4B827E]">{ref.impact}</span>
              </div>
              <button className="bg-[#1C2C5E] text-white px-4 py-2 rounded font-bold text-xs hover:bg-[#2a3d7a] transition shadow">PubMed</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reference;
