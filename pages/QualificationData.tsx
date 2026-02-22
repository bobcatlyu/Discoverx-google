
import React, { useState } from 'react';

const QualificationData: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const documents = [
    { id: 'qd1', title: 'Batch-to-Batch Reproducibility Report - PathHunter®', target: 'GLP1R', date: '2023-12-05' },
    { id: 'qd2', title: 'Z-Prime Optimization Data for High-Throughput Screening', target: 'ADORA2A', date: '2024-01-15' },
    { id: 'qd3', title: 'DMSO Tolerance Testing for PathHunter® Assays', target: 'General', date: '2023-08-20' },
    { id: 'qd4', title: 'Validation Data for eXpress® Kits (EC50 Comparison)', target: 'PD-1', date: '2024-02-28' },
    { id: 'qd5', title: 'Stability Testing Report (48h Incubation)', target: 'Kinase SH2', date: '2023-10-12' },
  ];

  const filtered = documents.filter(doc => doc.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-4">验证数据报告 (Qualification Data)</h1>
        <p className="text-slate-600 text-lg">查阅 DiscoverX 平台的各项系统验证与质量控制数据。</p>
        <div className="h-1 w-20 bg-[#4B827E] mt-6"></div>
      </div>

      <div className="mb-8 relative">
        <input 
          type="text" 
          placeholder="搜索报告名称..." 
          className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-[#4B827E] focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">验证项目</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">相关靶点</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">日期</th>
              <th className="px-6 py-4 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">操作</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-5 text-sm font-bold text-[#1C2C5E]">{item.title}</td>
                <td className="px-6 py-5 whitespace-nowrap"><span className="text-slate-600 text-xs font-medium">{item.target}</span></td>
                <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-400">{item.date}</td>
                <td className="px-6 py-5 whitespace-nowrap text-center">
                  <button className="text-[#4B827E] font-bold text-xs hover:underline">在线阅读</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QualificationData;
