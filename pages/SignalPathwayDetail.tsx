
import React from 'react';

const SignalPathwayDetail: React.FC = () => {
  const reporterData = [
    { pathway: 'NFAT', receptor: '-', host: 'Jurkat' },
    { pathway: 'NFAT', receptor: 'PD-1', host: 'Jurkat' },
    { pathway: 'NF-kB', receptor: 'IL18R1', host: 'U2OS' },
    { pathway: 'NF-kB', receptor: '-', host: 'U2OS' },
    { pathway: 'NF-kB', receptor: '-', host: 'HEK293' },
    { pathway: 'NF-kB', receptor: 'CD27', host: 'HEK293' },
    { pathway: 'NF-kB', receptor: 'RANK', host: 'U2OS' },
    { pathway: 'NF-kB', receptor: 'BCMA', host: 'K562' },
    { pathway: 'STAT3', receptor: 'IL-11', host: 'HepG2' },
    { pathway: 'STAT3', receptor: '-', host: 'HepG2' },
    { pathway: 'STAT5', receptor: 'IL-2', host: 'REH' },
    { pathway: 'STAT5', receptor: 'IL-3', host: 'U937' },
    { pathway: 'STAT5', receptor: 'IL-7', host: 'REH' },
    { pathway: 'STAT5', receptor: 'IL-15', host: 'REH' },
    { pathway: 'STAT5', receptor: 'LPS', host: 'THP-1' },
    { pathway: 'STAT5', receptor: 'TSLP', host: 'REH' },
    { pathway: 'TREM1-DAP12', receptor: '-', host: 'Jurkat' },
    { pathway: 'IFNy', receptor: '-', host: 'HEK293' },
  ];

  const degradationData = [
    { pathway: 'CDC25A', receptor: '-', host: 'U2OS' },
    { pathway: 'IKZF3v1', receptor: '-', host: 'HEK293' },
    { pathway: 'NFkB', receptor: '-', host: 'U2OS' },
    { pathway: 'IkB', receptor: 'RANK', host: 'U2OS' },
  ];

  const translocationData = [
    { pathway: 'FOXO3', receptor: '-', host: 'U2OS' },
    { pathway: 'Keap1-NRF2', receptor: '-', host: 'U2OS' },
    { pathway: 'NFkB(RELA)', receptor: '-', host: 'HEK293' },
    { pathway: 'TORC1', receptor: '-', host: 'U2OS' },
    { pathway: 'TORC2', receptor: '-', host: 'U2OS' },
    { pathway: 'TORC3', receptor: '-', host: 'U2OS' },
    { pathway: 'β-catenin', receptor: 'Wnt-Frizzled', host: 'U2OS' },
    { pathway: 'XBP1', receptor: '-', host: 'U2OS' },
    { pathway: 'SREBP1', receptor: '-', host: 'U2OS' },
    { pathway: 'SREBP2', receptor: '-', host: 'U2OS' },
  ];

  const ProductTable = ({ data, title }: { data: any[], title: string }) => (
    <div className="mb-12 overflow-hidden shadow-xl rounded-xl border border-slate-200">
      <div className="bg-[#4B827E] px-6 py-4">
        <h3 className="text-lg font-bold text-white uppercase tracking-wider">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-slate-200 text-slate-500">信号通路</th>
              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-slate-200 text-slate-500">靶点受体</th>
              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-slate-500">细胞背景</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {data.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/30 transition-colors'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#1C2C5E] border-r border-slate-100">{row.pathway}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4B827E] font-medium border-r border-slate-100">{row.receptor}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{row.host}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">通路分析 (Signal Pathway)</h1>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              信号通路分析是理解细胞生理状态、筛选药物候选物以及揭示分子机制的关键。从转录因子的最终激活到关键蛋白的稳态调控，Eurofins DiscoverX 提供了一整套基于活细胞的定量分析工具。
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              我们的平台涵盖了 **报告基因 (Reporter)**、**通路蛋白降解 (Degradation)** 以及 **核转运 (Translocation)** 三大核心技术，助力您全方位解析复杂的生物信号网络。
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/pathway_hero/800/600" 
              alt="Signal Pathway Analysis" 
              className="rounded-2xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* 2. MOA Section - 3 Core Modules Stacked Vertically */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center">核心检测模块 (Core Pathway Modules)</h2>
          
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="divide-y divide-slate-100">
              {[
                { 
                  title: "报告基因 (Reporter Gene)", 
                  desc: "通过监测特定转录因子（如 STAT, NF-κB, FoxO）对启动子元件的激活，间接评估下游信号通路的完整性。我们的报告基因系统具有极高的诱导倍数和信噪比，是筛选生物药中和效力的理想工具。" 
                },
                { 
                  title: "通路蛋白降解 (Protein Degradation)", 
                  desc: "利用 EFC 技术实时、定量地监测细胞内目标蛋白的水平变化。该模块专为 TPD (Targeted Protein Degradation) 药物如 PROTAC® 或分子胶而设计，能够捕捉到纳摩尔级别的降解活性及其动力学过程。" 
                },
                { 
                  title: "核转运 (Nuclear Translocation)", 
                  desc: "直接在活细胞中追踪蛋白质在细胞质与细胞核之间的往返运动。这对于研究核受体激活、激酶调节的易位（如 AKT/FoxO 通路）以及药物诱导的贩运改变至关重要。" 
                }
              ].map((item, i) => (
                <div key={i} className="p-10 hover:bg-slate-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] text-xl font-bold">
                        0{i + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-2xl font-bold text-[#4B827E] mb-4">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Categorized Product Tables */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center md:text-left">通路分析产品组合 / Pathway Portfolio</h2>
        <div className="space-y-4">
          <ProductTable 
            title="报告基因系统 (Pathway Reporter)" 
            data={reporterData} 
          />
          <ProductTable 
            title="通路蛋白降解系列 (Pathway Degradation)" 
            data={degradationData} 
          />
          <ProductTable 
            title="核转运分析系列 (Pathway Nuclear Translocation)" 
            data={translocationData} 
          />
        </div>
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm italic bg-slate-50 py-4 rounded-lg border border-dashed border-slate-300">
            * 我们可以根据您的通路研究需求，通过定制开发服务构建特定的报告基因或蛋白降解监测系统。
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignalPathwayDetail;
