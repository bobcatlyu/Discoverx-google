
import React from 'react';

const OthersDoc: React.FC = () => {
  const miscDocs = [
    { title: '2024-2025 Product Catalog (Full Version)', type: 'PDF', size: '12.4 MB' },
    { title: 'Corporate Social Responsibility Report', type: 'PDF', size: '3.1 MB' },
    { title: 'Material Safety Data Sheet (MSDS) - General', type: 'PDF', size: '0.8 MB' },
    { title: 'Scientific Posters - AACR 2023', type: 'ZIP', size: '45.0 MB' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-4">其他资料 (Others)</h1>
        <p className="text-slate-600 text-lg">下载企业画册、产品目录及相关合规性文件。</p>
        <div className="h-1 w-20 bg-[#4B827E] mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {miscDocs.map((doc, i) => (
          <div key={i} className="bg-slate-50 p-8 rounded-2xl flex items-center justify-between border border-slate-200 group hover:bg-white hover:shadow-xl transition-all">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#4B827E] shadow-sm border border-slate-100">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-[#1C2C5E]">{doc.title}</h4>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">{doc.type} • {doc.size}</p>
              </div>
            </div>
            <button className="opacity-0 group-hover:opacity-100 bg-[#4B827E] text-white px-6 py-2 rounded-full font-bold text-xs transition shadow-lg">DOWNLOAD</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OthersDoc;
