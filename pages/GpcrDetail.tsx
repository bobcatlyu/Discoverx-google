
import React, { useState } from 'react';

const GpcrDetail: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Comprehensive GPCR product data mapped from PDF pages 6-11
  const fullProductData = [
    // Page 6: Serotonin, Muscarinic, Adenosine, Adrenoceptor, etc.
    { target: 'HTR1A / 5HT1A', family: 'Serotonin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'HTR1B / 5HT1B', family: 'Serotonin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'HTR1E / 5HT1E', family: 'Serotonin', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'HTR1F / 5HT1F', family: 'Serotonin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'HTR2A / 5HT2A', family: 'Serotonin', moa: 'Gq', cellLine: '✓', express: '-', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'HTR2C / 5HT2C', family: 'Serotonin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'HTR6 / 5HT6', family: 'Serotonin', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'CHRM1 / M1', family: 'Muscarinic', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CHRM2 / M2', family: 'Muscarinic', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CHRM3 / M3', family: 'Muscarinic', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CHRM4 / M4', family: 'Muscarinic', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CHRM5 / M5', family: 'Muscarinic', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'ADORA1 / A1', family: 'Adenosine', moa: 'Gi', cellLine: '✓', express: '-', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'ADORA2A / A2A', family: 'Adenosine', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '-' },
    { target: 'ADORA2B / A2B', family: 'Adenosine', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'ADORA3 / A3', family: 'Adenosine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'ADRA1A / α1A', family: 'Adrenoceptor', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'ADRA2A / α2A', family: 'Adrenoceptor', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'ADRB1 / β1AR', family: 'Adrenoceptor', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'ADRB2 / β2AR', family: 'Adrenoceptor', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'AGTR1 / AT1', family: 'Angiotensin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'AGTRL1 / APJ', family: 'Apelin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'GPBAR1 / GPR131', family: 'Bile Acid', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GRPR / BB2', family: 'Bombesin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'BDKRB2 / B2', family: 'Bradykinin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },

    // Page 7: Cannabinoid, Chemokine, Cholecystokinin, etc.
    { target: 'CNR1 / CB1', family: 'Cannabinoid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'CNR2 / CB2', family: 'Cannabinoid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'CCR1', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CCR2', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'CCR4', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CCR5', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CCR7', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CXCR1 / IL8RA', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CXCR2 / IL8RB', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CXCR3', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CXCR4', family: 'Chemokine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'CXCR7 / ACKR3', family: 'Chemokine', moa: 'Arrestin', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'CCKAR / CCK1', family: 'Cholecystokinin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'C5AR1 / C5A', family: 'Complement', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'CRHR1 / CRF1', family: 'CRF', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'DRD1 / D1', family: 'Dopamine', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'DRD2 / D2', family: 'Dopamine', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '-' },
    { target: 'EDNRA / ETA', family: 'Endothelin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'FPR1 / FPR', family: 'Formylpeptide', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },

    // Page 8 & 9: Free Fatty Acid, Glucagon, Orphans, Histamine, etc.
    { target: 'FFAR1 / GPR40', family: 'Free Fatty Acid', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GABBR1-GABBR2', family: 'GABA', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'GALR1 / GAL1', family: 'Galanin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'GHSR / GRLN', family: 'Ghrelin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'GCGR / Glucagon', family: 'Glucagon', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'GIPR / GIP', family: 'Glucagon', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '-' },
    { target: 'GLP1R / GLP-1', family: 'Glucagon', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'GLP2R / GLP-2', family: 'Glucagon', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'FSHR / FSH', family: 'Glycoprotein', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '-', trans: '-' },
    { target: 'LHCGR / LH', family: 'Glycoprotein', moa: 'Gs/Gq', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '-', trans: '-' },
    { target: 'TSHR / TSH', family: 'Glycoprotein', moa: 'Gs/Gq', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '-', trans: '-' },
    { target: 'GNRHR / GnRH', family: 'GnRH', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'GPER / GPR30', family: 'Orphan', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '-' },
    { target: 'GPR35', family: 'Orphan', moa: 'Gi/Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'HRH1 / H1', family: 'Histamine', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'HRH2 / H2', family: 'Histamine', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'LTB4R / BLT1', family: 'Leukotriene', moa: 'Gi/Gq', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'OXER1', family: 'Leukotriene', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'LPAR1 / EDG2', family: 'Lysophospholipid', moa: 'Gi/Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },

    // Page 10 & 11: S1PR, Melatonin, Opioid, Prostanoid, Vasopressin, etc.
    { target: 'S1PR1 / EDG1', family: 'Lysophospholipid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'S1PR2 / EDG5', family: 'Lysophospholipid', moa: 'Gi/Gq/G12', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'S1PR3 / EDG3', family: 'Lysophospholipid', moa: 'Gi/Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'MCHR1', family: 'MCH', moa: 'Gi/Gq', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'MC4R', family: 'Melanocortin', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '-' },
    { target: 'MTNR1A / MT1', family: 'Melatonin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'MTNR1B / MT2', family: 'Melatonin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'NPY2R', family: 'Neuropeptide Y', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'NTSR1 / NTS1', family: 'Neurotensin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'OPRM1 / μ', family: 'Opioid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'OPRD1 / δ', family: 'Opioid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'OPRK1 / κ', family: 'Opioid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'OPRL1 / NOP', family: 'Opioid', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'HCRTR1 / OX1', family: 'Orexin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'P2RY1 / P2Y1', family: 'P2Y', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'P2RY12', family: 'P2Y', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'PTHR1 / PTH1', family: 'Parathyroid', moa: 'Gs/Gq', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'PTGDR / DP1', family: 'Prostanoid', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '-' },
    { target: 'PTGER2 / EP2', family: 'Prostanoid', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '-' },
    { target: 'PTGER4 / EP4', family: 'Prostanoid', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'F2RL1 / PAR2', family: 'Proteinase-Activated', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'SSTR2 / SST2', family: 'Somatostatin', moa: 'Gi', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'TACR1 / NK1', family: 'Tachykinin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'TRHR / TRH1', family: 'Thyrotropin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '-', trans: '✓' },
    { target: 'AVPR2 / V2', family: 'Vasopressin', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'OXTR / OT', family: 'Vasopressin', moa: 'Gq', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'ADCYAP1R1 / PAC1', family: 'VIP & PACAP', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '-', membrane: '✓', trans: '✓' },
    { target: 'VIPR1 / VPAC1', family: 'VIP & PACAP', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
    { target: 'VIPR2 / VPAC2', family: 'VIP & PACAP', moa: 'Gs', cellLine: '✓', express: '✓', bioassay: '✓', membrane: '✓', trans: '✓' },
  ];

  const filteredData = fullProductData.filter(item => 
    item.target.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.family.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.moa.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">G蛋白偶联受体 (GPCR)</h1>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              G蛋白偶联受体（GPCRs）是人类基因组中最大的膜受体家族。作为药物研发中最成功的靶点类别，目前市场上约有 30% 以上的批准药物针对此类受体。
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Eurofins DiscoverX 提供了业界最全面的 GPCR 解决方案，拥有超过 1600 种经过验证的检测方法，覆盖了超过 90% 的已知人类 GPCRome。
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/gpcr_structure/800/600" 
              alt="GPCR Structure" 
              className="rounded-2xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* 2. MOA Section - Vertical Arrangement Style matching CheckpointDetail */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center">作用机制 MoA</h2>
          
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="divide-y divide-slate-100">
              {[
                { 
                  id: "1", 
                  title: "cAMP 监测", 
                  desc: "直接定量监测 Gs 或 Gi 偶联受体引起的细胞内第二信使 cAMP 水平的变化。使用 HitHunter® 专有技术，提供极高灵敏度的均相化学发光检测，是小分子和生物药筛选的标准方法。" 
                },
                { 
                  id: "2", 
                  title: "Ca 离子动员", 
                  desc: "针对 Gq 偶联通路，利用高灵敏度荧光染料（如 Calcium No Wash 技术）实时监测受体激活激发的胞内钙库释放或胞外钙流入，完美适配 HTS 自动化流程。" 
                },
                { 
                  id: "3", 
                  title: "β-arrestin 招募", 
                  desc: "利用专有的 EFC 技术监测几乎所有 GPCR 激活后招募 β-arrestin 的物理过程。该方法不依赖 G 蛋白通路，是研究偏向性配体 (Biased Ligands) 和孤儿受体的核心工具。" 
                },
                { 
                  id: "4", 
                  title: "内吞 (Activated/Total)", 
                  desc: "定量追踪活化后的受体从细胞表面转移到胞内内体的过程。对于评估受体下调、ADC 药物内化效率及长效药效研究具有至关重要的参考价值。" 
                },
                { 
                  id: "5", 
                  title: "配体受体结合", 
                  desc: "利用高质量膜制品 (Membrane Preps) 进行放射性配体饱和结合或竞争性结合实验，直接测定药物与受体活性口袋的物理结合常数 (Kd/Ki) 及动力学特性。" 
                },
                { 
                  id: "6", 
                  title: "Pharmacotrafficking", 
                  desc: "监测蛋白质在胞内（如内质网）与细胞膜间的定向运输过程。常用于研究由于折叠错误导致的贩运缺陷，并筛选能够挽救功能的药理学伴侣 (Pharmacological Chaperones)。" 
                }
              ].map((item) => (
                <div key={item.id} className="p-10 hover:bg-slate-50 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#4B827E] text-xl font-black group-hover:bg-[#4B827E] group-hover:text-white transition-colors">
                        {item.id}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-[#1C2C5E] mb-4">{item.title}</h3>
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

      {/* 3. Product List Table Section - Full Listing from PDF pages 6-11 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-[#1C2C5E]">GPCR 产品组合 / Product Portfolio</h2>
            <p className="text-slate-500 mt-2">基于最新目录详尽更新，覆盖 290+ 靶点及主要产品类型（PDF 第 6-11 页）</p>
          </div>
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="搜索靶点、系列或通路 (如 GLP1R)..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-full focus:ring-2 focus:ring-[#4B827E] focus:border-transparent outline-none text-sm transition-all shadow-inner"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="overflow-x-auto shadow-2xl rounded-2xl border border-slate-200 max-h-[800px] overflow-y-auto">
          <table className="min-w-full divide-y divide-slate-200 border-separate border-spacing-0">
            <thead className="bg-[#4B827E] text-white sticky top-0 z-30">
              <tr>
                <th rowSpan={2} className="w-1 px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-white/20 bg-[#4B827E] whitespace-nowrap">Target / Gene ID</th>
                <th rowSpan={2} className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-white/20 bg-[#4B827E]">Series / Family</th>
                <th rowSpan={2} className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-white/20 bg-[#4B827E]">Primary MOA</th>
                <th colSpan={5} className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider border-b border-white/20 bg-[#4B827E]">产品可用性 / Product Availability</th>
              </tr>
              <tr className="bg-[#5a938f]">
                <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider border-r border-white/10">稳转细胞株</th>
                <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider border-r border-white/10">eXpress® Kit</th>
                <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider border-r border-white/10">Bioassay Kit</th>
                <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider border-r border-white/10">膜制品</th>
                <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider">转运/内吞</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {filteredData.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/40 transition-colors'}>
                  <td className="w-1 px-6 py-4 whitespace-nowrap text-sm font-bold text-[#1C2C5E] border-r border-slate-100">{row.target}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-500 font-medium border-r border-slate-100 uppercase tracking-tight">{row.family}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-400 italic border-r border-slate-100">{row.moa}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#4B827E] font-bold border-r border-slate-100">{row.cellLine}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#4B827E] font-bold border-r border-slate-100">{row.express}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#4B827E] font-bold border-r border-slate-100">{row.bioassay}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#4B827E] font-bold border-r border-slate-100">{row.membrane}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-center text-sm text-[#4B827E] font-bold">{row.trans}</td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-6 py-20 text-center text-slate-400 italic">未找到匹配的靶点，请尝试搜索其他关键字。</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center bg-slate-100 p-8 rounded-2xl border border-slate-200 gap-6">
          <div className="text-sm text-slate-600 leading-relaxed max-w-2xl">
            <p className="mb-2"><strong>技术说明：</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>本表详尽列出了 PDF 目录第 6-11 页涵盖的 GPCR 靶点系列。</li>
              <li>"转运/内吞" 包括基于 EFC 技术的受体内吞 (Internalization) 和贩运 (Trafficking) 检测细胞系。</li>
              <li>"Bioassay Kit" 专门为治疗性抗体的效价评估 (Potency Assay) 和中和活性检测优化和预验证。</li>
            </ul>
          </div>
          <button className="whitespace-nowrap bg-[#1C2C5E] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#2a3d7a] transition-all shadow-xl hover:-translate-y-1">
            索取 2026 版完整 PDF 目录
          </button>
        </div>
      </section>
    </div>
  );
};

export default GpcrDetail;
