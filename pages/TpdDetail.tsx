
import React from 'react';

const TpdDetail: React.FC = () => {
  const kinases = [
    ['B-Raf', 'CDKN1A (p21)', 'IRAK4'],
    ['BRAF1(V600E)', 'IKZF1', 'KRAS'],
    ['BTK', 'IKZF2', 'MYC (c-Myc)']
  ];

  const epigenetics = [
    ['BRD4', 'STAT3']
  ];

  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">靶向蛋白降解 (TPD)</h1>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              靶向蛋白降解 (Targeted Protein Degradation, TPD) 是一种革命性的治疗方法，通过利用细胞自身的废物处理系统来消除致病蛋白。
            </p>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              与传统的抑制剂不同，TPD 分子（如 PROTACs）不需要持续占据活性位点。它们通过催化方式起作用，能够处理以往被认为“不可成药”的靶点。
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Eurofins DiscoverX 提供基于 SPRINTer™ 技术的均相检测方案，能够在生理相关的细胞模型中，实时、高灵敏度地监测内源性蛋白的动态周转过程。
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/tpd_science/800/600" 
              alt="Protein Degradation Technology" 
              className="rounded-2xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* 2. MOA Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center">作用机制 (Mechanism of Action)</h2>
          
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-10">
            <h3 className="text-2xl font-bold text-[#4B827E] mb-6">SPRINTer™ 蛋白周转生物传感器</h3>
            
            <div className="space-y-8 text-slate-600 leading-relaxed text-lg">
              <p>
                通过使用均相检测格式，在生理相关的细胞模型中识别能够调节内源蛋白水平的新分子实体（如 PROTACs）。SPRINTer (Sensing Protein Internal Turnover) 蛋白周转生物传感器检测能够对靶点发生的 PROTAC 介导的降解进行高灵敏度的定量分析。
              </p>
              
              <p>
                这些稳定的生物传感器细胞株利用 <strong>CRISPR/Cas9 基因编辑技术</strong> 构建，将 Eurofins DiscoverX 的酶片段互补 (EFC) 技术中的小片段酶供体 (ED) 插入到目标基因的<strong>内源性位点</strong>。由其天然启动子表达的目标基因会产生带有 ED 标签的内源蛋白。
              </p>

              {/* Updated color block to theme green */}
              <div className="bg-[#4B827E] text-white p-8 rounded-xl shadow-lg my-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="shrink-0 bg-white/20 p-4 rounded-lg border border-white/20">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-4">双功能分子桥梁</h4>
                    <p className="text-white/90">
                      通过 PROTAC，内源性的 ED 标签目标蛋白被拉近至蛋白降解机器附近。这种双功能小分子在目标蛋白与特定的内源性 E3 连接酶（涉及泛素介导的目标蛋白破坏酶）之间架起桥梁。
                    </p>
                  </div>
                </div>
              </div>

              <p>
                目标蛋白与 PROTAC 的近距离接触导致其发生泛素化并随后被降解，从而引起 <strong>EFC 信号的丢失</strong>。由于降解后的 ED 标签内源蛋白无法再与外源性 EFC 大片段酶受体 (EA) 结合并形成完整的 β-gal 酶，因此无法水解底物产生化学发光信号。
              </p>

              <p className="font-semibold text-[#4B827E]">
                基于 EFC 的蛋白降解技术允许通过定量分析 PROTAC 诱导的蛋白周转动力学，来评估药物引起的 ED 标签目标蛋白水平的变化，该技术同样适用于高通量筛选 (HTS) 模式。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product List Table Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center md:text-left">TPD 监测产品列表 / TPD Portfolio</h2>
        
        {/* Kinase Targets Table */}
        <div className="mb-12 overflow-hidden shadow-xl rounded-xl border border-slate-200">
          <div className="bg-[#4B827E] px-6 py-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">激酶靶点 / Kinase Targets</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <tbody className="bg-white divide-y divide-slate-100">
                {kinases.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-6 py-4 text-sm font-bold text-[#1C2C5E] border-r border-slate-100 last:border-r-0">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Epigenetic Protein Targets Table */}
        <div className="mb-12 overflow-hidden shadow-xl rounded-xl border border-slate-200">
          <div className="bg-[#4B827E] px-6 py-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">表观遗传蛋白靶点 / Epigenetic Protein Targets</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <tbody className="bg-white divide-y divide-slate-100">
                {epigenetics.map((row, idx) => (
                  <tr key={idx} className="bg-white">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-6 py-4 text-sm font-bold text-[#1C2C5E] border-r border-slate-100 last:border-r-0 min-w-[33.33%]">
                        {cell}
                      </td>
                    ))}
                    {/* Fill empty cells to maintain grid if needed */}
                    <td className="px-6 py-4 border-r border-slate-100"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm italic bg-slate-50 py-4 rounded-lg border border-dashed border-slate-300">
            * 利用我们的定制服务，我们可以在您感兴趣的任何细胞背景下，通过 CRISPR/Cas9 为特定靶标构建 SPRINTer™ 监测系统。
          </p>
        </div>
      </section>
    </div>
  );
};

export default TpdDetail;
