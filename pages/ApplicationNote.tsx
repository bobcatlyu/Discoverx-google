
import React, { useState } from 'react';

const ApplicationNote: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const documents = [
    { id: 'an1', title: 'Screening Biased Agonists for GPCR Targets', badge: 'New', date: '2024-04-12' },
    { id: 'an2', title: 'ADC Internalization Dynamics: From Lab to Clinic', badge: 'Technical', date: '2023-11-05' },
    { id: 'an3', title: 'Optimizing TPD Lead Discovery with SPRINTer™', badge: 'Technical', date: '2024-01-20' },
    { id: 'an4', title: 'High-Throughput Profiling of Kinase Inhibitors', badge: 'Case Study', date: '2023-09-30' },
    { id: 'an5', title: 'Evaluating NAb Interference in Bioassays', badge: 'Whitepaper', date: '2024-03-15' },
  ];

  const filtered = documents.filter(doc => doc.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-4">技术应用指南 (Application Notes)</h1>
        <p className="text-slate-600 text-lg">探索深度技术白皮书、案例研究与应用场景分析。</p>
        <div className="h-1 w-20 bg-[#4B827E] mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(item => (
          <div key={item.id} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
            <span className="inline-block px-3 py-1 bg-teal-50 text-[#4B827E] text-[10px] font-black uppercase rounded mb-4">{item.badge}</span>
            <h3 className="text-xl font-bold text-[#1C2C5E] mb-4 group-hover:text-[#4B827E] transition-colors">{item.title}</h3>
            <p className="text-slate-400 text-xs mb-6 font-medium">Published: {item.date}</p>
            <button className="text-[#4B827E] font-bold text-sm flex items-center">
              READ FULL ARTICLE <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationNote;
