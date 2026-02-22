
import React, { useState } from 'react';
import { Page } from '../types';

interface DatasheetListProps {
  onNavigate: (page: Page) => void;
}

const DatasheetList: React.FC<DatasheetListProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const datasheets = [
    { 
      id: 'd1', 
      catNo: '93-0300C2', 
      name: 'PathHunter® CHO-K1 GLP1R β-Arrestin Cell Line', 
      target: 'GLP1R', 
      modality: 'Cell Line',
      updated: '2024-03-12'
    },
    { 
      id: 'd2', 
      catNo: '93-0243C2', 
      name: 'PathHunter® CHO-K1 ADORA2A β-Arrestin Cell Line', 
      target: 'ADORA2A', 
      modality: 'Cell Line',
      updated: '2024-02-15'
    },
    { 
      id: 'd3', 
      catNo: '95-0100K2', 
      name: 'HitHunter® cAMP Assay for Gs Receptors', 
      target: 'Gs GPCRs', 
      modality: 'Assay Kit',
      updated: '2024-01-20'
    },
    { 
      id: 'd4', 
      catNo: '93-0001', 
      name: 'PathHunter® Detection Kit', 
      target: 'Enzyme Fragment Complementation', 
      modality: 'Detection Reagents',
      updated: '2023-11-05'
    },
    { 
      id: 'd5', 
      catNo: '93-0563R2A', 
      name: 'AssayComplete™ Cell Plating 2 Reagent', 
      target: 'Cell Culture', 
      modality: 'Reagents',
      updated: '2023-12-10'
    }
  ];

  const filtered = datasheets.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    d.catNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-4">产品说明书 (Datasheets)</h1>
        <p className="text-slate-600 text-lg">查阅及下载详细的产品规格书、批次验证数据及操作指南。</p>
        <div className="h-1 w-20 bg-[#4B827E] mt-6"></div>
      </div>

      {/* Search Bar */}
      <div className="mb-8 relative">
        <input 
          type="text" 
          placeholder="搜索产品名称或目录号..." 
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
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">目录号 (Cat No.)</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">产品名称 (Product Name)</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">靶点 (Target)</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider text-center">操作 (Action)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-5 whitespace-nowrap text-sm font-mono text-slate-900">{item.catNo}</td>
                <td className="px-6 py-5">
                  <button 
                    onClick={() => item.catNo === '93-0300C2' ? onNavigate(Page.DatasheetDetail) : null}
                    className="text-sm font-bold text-[#1C2C5E] hover:text-[#4B827E] text-left transition-colors"
                  >
                    {item.name}
                  </button>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <span className="px-3 py-1 bg-teal-50 text-[#4B827E] text-xs font-bold rounded-full">{item.target}</span>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-center">
                  <div className="flex items-center justify-center space-x-4">
                    <button 
                       onClick={() => item.catNo === '93-0300C2' ? onNavigate(Page.DatasheetDetail) : null}
                       className="p-2 text-slate-400 hover:text-[#4B827E] transition-colors" title="在线预览"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button className="p-2 text-slate-400 hover:text-red-600 transition-colors" title="下载 PDF">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="p-20 text-center">
            <p className="text-slate-400">未找到相关产品资料。</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatasheetList;
