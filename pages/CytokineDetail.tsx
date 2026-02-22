
import React from 'react';

const CytokineDetail: React.FC = () => {
  const productData = [
    { ligand: 'IL-1RN', target: 'IL-1R', moa: 'IkB degradation pathway', synonyms: 'DIRA; ICIL-1RA; IL-1ra3; IL1F3; IRAP; MVCD4' },
    { ligand: 'IL-1RN', target: 'IL-1R1 / IL-1RAP', moa: 'Receptors Dimerization', synonyms: 'DIRA; ICIL-1RA; IL-1ra3; IL1F3; IRAP; MVCD4' },
    { ligand: 'IL-1α', target: 'IL-1R', moa: 'IkB degradation pathway', synonyms: 'IL-1A; IL1; IL1F1' },
    { ligand: 'IL-1α', target: 'IL-1R1 / IL-1RAP', moa: 'Receptors Dimerization', synonyms: 'IL-1A; IL1; IL1F1' },
    { ligand: 'IL-1β', target: 'IL-1R', moa: 'IkB degradation pathway', synonyms: 'IL-1B; IL1F2' },
    { ligand: 'IL-2', target: 'IL-2RB / IL-2RG', moa: 'Receptors Dimerization', synonyms: 'TCGF; lymphokine' },
    { ligand: 'IL-2', target: 'IL-2RB / IL-2RG / IL-2RA', moa: 'Receptors Dimerization', synonyms: 'TCGF; lymphokine' },
    { ligand: 'IL-2', target: 'IL-2RA/IL-2RB', moa: 'STAT5 Pathway Reporter', synonyms: 'TCGF; lymphokine' },
    { ligand: 'IL-3', target: 'IL-3R / CD131 (CSF2RB)', moa: 'Receptors Dimerization', synonyms: 'CD131' },
    { ligand: 'IL-3', target: 'IL-3RA/CD131', moa: 'STAT5 Pathway Reporter', synonyms: 'CD131' },
    { ligand: 'IL-4', target: 'IL-4R / IL-2RG', moa: 'Receptors Dimerization', synonyms: 'BCGF-1; BSF-1;' },
    { ligand: 'IL-4', target: 'IL-4R / IL-13R', moa: 'Receptors Dimerization', synonyms: 'BCGF-1; BSF-1;' },
    { ligand: 'IL-5', target: 'IL-5R / CSF2RB', moa: 'Receptors Dimerization', synonyms: 'EDF; TRF' },
    { ligand: 'IL-6', target: 'IL-6RA / IL-6ST', moa: 'Receptors Dimerization', synonyms: 'BSF2; HGF; HSF; IFNB2;' },
    { ligand: 'IL-7', target: 'IL-2RG', moa: 'STAT5 Pathway Reporter', synonyms: '' },
    { ligand: 'IL-7', target: 'IL-7R / IL-2RG', moa: 'Receptors Dimerization', synonyms: '' },
    { ligand: 'IL-8B', target: 'CXCR2', moa: 'β-arrestin recruitment', synonyms: 'CXCL8; GCP-1; GCP1; LECT; LUCT; LYNAP; MDNCF; MONAP; NAF; NAP-1; NAP1' },
    { ligand: 'IL-8A', target: 'CXCR1', moa: 'β-arrestin recruitment', synonyms: 'CXCL8; GCP-1; GCP1; LECT; LUCT; LYNAP; MDNCF; MONAP; NAF; NAP-1; NAP1' },
    { ligand: 'IL-9', target: 'IL-9R / IL-2RG', moa: 'Receptors Dimerization', synonyms: 'HP40; P40' },
    { ligand: 'IL-10', target: 'IL-10RA / IL-10RB', moa: 'Receptors Dimerization', synonyms: 'CSIF; GVHDS; IL10A; TGIF' },
    { ligand: 'IL-11', target: 'IL-11R / IL-6ST', moa: 'Receptors Dimerization', synonyms: 'AGIF;' },
    { ligand: 'IL-11', target: 'IL-11', moa: 'STAT3 Pathway Reporter', synonyms: 'AGIF;' },
    { ligand: 'IL-11', target: 'IL-11R / IL-6ST', moa: 'Receptors Dimerization', synonyms: 'AGIF;' },
    { ligand: 'IL-12', target: 'IL-12RB1 / IL-12RB2', moa: 'Receptors Dimerization', synonyms: 'p70' },
    { ligand: 'IL-13', target: 'IL-4R / IL-13R', moa: 'Receptors Dimerization', synonyms: 'P600' },
    { ligand: 'IL-13', target: 'IL-4R / IL-13R', moa: 'Receptors Dimerization', synonyms: 'P600' },
    { ligand: 'IL-15', target: 'IL-2RB / IL-2RG', moa: 'Receptors Dimerization', synonyms: '' },
    { ligand: 'IL-15', target: 'IL-2RB / IL-2RG', moa: 'STAT5 Pathway Reporter', synonyms: '' },
    { ligand: 'IL-17A', target: 'IL-17RA / IL-17RC', moa: 'Receptors Dimerization', synonyms: 'CTLA8; IL-17' },
    { ligand: 'IL-17E', target: 'IL-17RA / IL-17RB', moa: 'Receptors Dimerization', synonyms: 'IL25;' },
    { ligand: 'IL-17F', target: 'IL-17RA / IL-17RC', moa: 'Receptors Dimerization', synonyms: '' },
    { ligand: 'IL-18', target: 'IL-18R1 / IL-18RAP', moa: 'Receptors Dimerization', synonyms: 'IGIF; IL-1g; IL1F4' },
    { ligand: 'IL-18', target: 'IL-18R1 / IL-18RAP', moa: 'NF-kB Pathway Reporter', synonyms: 'IGIF; IL-1g; IL1F4' },
    { ligand: 'IL-20', target: 'IL-20R1 / IL-20R2', moa: 'Receptors Dimerization', synonyms: 'IL10D; ZCYTO10' },
    { ligand: 'IL-20', target: 'IL-22R / IL-20R2', moa: 'Receptors Dimerization', synonyms: 'IL10D; ZCYTO10' },
    { ligand: 'IL-21', target: 'IL-21R / IL-2RG', moa: 'Receptors Dimerization', synonyms: 'CVID11; Za11' },
    { ligand: 'IL-22', target: 'IL-22R / IL-10RB', moa: 'Receptors Dimerization', synonyms: 'IL-D110; IL-TIF; TIFIL-23; TIFa; zcyto18' },
    { ligand: 'IL-23', target: 'IL-23R / IL-12RB1', moa: 'Receptors Dimerization', synonyms: 'IL-23A; IL23P19; P19; SGRF' },
    { ligand: 'IL-24', target: 'IL-20R1 / IL-20R2', moa: 'Receptors Dimerization', synonyms: 'C49A; FISP; IL10B; MDA7; MOB5; ST16' },
    { ligand: 'IL-24', target: 'IL-22R / IL-20R2', moa: 'Receptors Dimerization', synonyms: 'C49A; FISP; IL10B; MDA7; MOB5; ST16' },
    { ligand: 'IL-26', target: 'IL-20R1 / IL-10RB', moa: 'Receptors Dimerization', synonyms: 'AK155;' },
    { ligand: 'IL-27', target: 'IL-27RA / IL6ST', moa: 'Receptors Dimerization', synonyms: 'IL30; p28' },
    { ligand: 'IL-28A', target: 'IFNLR1 / IL-10RB', moa: 'Receptors Dimerization', synonyms: 'IFNL2' },
    { ligand: 'IL-28B', target: 'IFNLR1 / IL-10RB', moa: 'Receptors Dimerization', synonyms: 'IFNL3' },
    { ligand: 'IL-29', target: 'IFNLR1 / IL-10RB', moa: 'Receptors Dimerization', synonyms: 'IFNL1;' },
    { ligand: 'IL-31', target: 'OSMRb / IL-31RA', moa: 'Receptors Dimerization', synonyms: '' },
    { ligand: 'IL-33', target: 'IL-1RL1 (ST2) / IL-1RAP', moa: 'Receptors Dimerization', synonyms: 'C9orf26; DVS27; IL1F11;NF-HEV; NFEHEV; RP11-575C20.2' },
    { ligand: 'IL-34', target: 'CSF1R / CSF1R', moa: 'Receptors Dimerization', synonyms: 'C16orf77' },
    { ligand: 'IL-35', target: 'IL-12RB2 / IL-6ST', moa: 'Receptors Dimerization', synonyms: '' },
    { ligand: 'IL-36A', target: 'IL-1RL2 / IL-1RAP', moa: 'Receptors Dimerization', synonyms: 'FIL1; FIL1(EPSILON); FIL1E; IL-1F6; IL1(EPSILON);' },
    { ligand: 'IL-36B', target: 'IL-1RL2 / IL-1RAP', moa: 'Receptors Dimerization', synonyms: 'FIL1; FIL1-(ETA); FIL1H; FILI-(ETA); IL-1F8; IL-1H2; IL-1ETA; IL1F8; IL1H2' },
    { ligand: 'IL-36C', target: 'IL-1RL2 / IL-1RAP', moa: 'Receptors Dimerization', synonyms: 'IL36G; IL-1F9; IL-1H1; IL-1RP2; IL1E;IL1F9; IL1H1; IL1RP2' },
    { ligand: 'IL-36RN', target: 'IL-1RL2 / IL-1RAP', moa: 'Receptors Dimerization', synonyms: 'IL-36RA;' },
    { ligand: 'IL-37', target: 'IL-18R / SIGIRR', moa: 'Receptors Dimerization', synonyms: 'FIL1; FIL1(ZETA); FIL1Z; IL-1F7; IL-1H; IL-1H4; IL-1RP1; IL1F7; IL1H4; IL1RP1' },
    { ligand: 'G-CSF', target: 'CSF3-JAK1', moa: 'SH2 Recruitment', synonyms: 'CSF3' },
    { ligand: 'GM-CSF', target: 'CSFR2A / CSFR2B', moa: 'Receptors Dimerization', synonyms: 'CSF2' },
    { ligand: 'GM-CSF', target: 'CSFR2A / CSFR2B', moa: 'STAT5 Pathway Reporter', synonyms: 'CSF2' },
    { ligand: 'M-CSF', target: 'CSF1R / CSF1R', moa: 'Receptors Dimerization', synonyms: 'CSF1' },
    { ligand: 'LIF', target: 'IL-6ST / LIFR', moa: 'Receptors Dimerization', synonyms: 'CDF; DIA; HILDA; MLPLI' },
    { ligand: 'OSM', target: 'OSMRb / IL-6ST', moa: 'Receptors Dimerization', synonyms: 'MGC20461' },
    { ligand: 'TNFα', target: 'IL-17RD / TNFR2', moa: 'Receptors Dimerization', synonyms: '' },
    { ligand: 'TNFα', target: 'TNFR', moa: 'IkB degradation pathway', synonyms: '' },
    { ligand: 'TNFα', target: 'TNFR', moa: 'NF-kB Pathway Reporter', synonyms: '' },
    { ligand: 'TSLP', target: 'IL-7R / TSLP-R', moa: 'Receptors Dimerization', synonyms: '' },
    { ligand: 'TSLP', target: 'CRLF2', moa: 'STAT5 Pathway Reporter', synonyms: '' },
  ];

  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">细胞因子受体 (Cytokine Receptors)</h1>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              细胞因子受体是免疫系统的“天线”，通过识别白介素、干扰素及肿瘤坏死因子等分子，精细调控炎症、造血及免疫防御。
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Eurofins DiscoverX 提供针对 I 型及 II 型细胞因子受体的全方位检测方案，涵盖从初始的受体组装到下游信号放大的完整过程，助力免疫治疗药物的精准开发。
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/cytokine_hero/800/600" 
              alt="Cytokine Receptor Science" 
              className="rounded-2xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* 2. MOA Section - Updated to 3 Specific Modules */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center">作用机制 (Mechanism of Action)</h2>
          
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="divide-y divide-slate-100">
              {[
                { 
                  title: "1. 受体二聚化 (Receptor Dimerization)", 
                  desc: "通过酶片段互补 (EFC) 技术直接监测配体诱导的受体亚基（如同源二聚体 IL-1R 或异源二聚体 IL-2R/IL-12R）的物理组装。这是评估中和抗体阻断效力的最直接手段。" 
                },
                { 
                  title: "2. 信号通路报告基因 (Pathway Reporter)", 
                  desc: "定量分析受体激活后触发的下游转录因子活动。主要包括 STAT3, STAT5, NF-κB 等信号通路的激活监测。" 
                },
                { 
                  title: "3. 信号通路蛋白降解 (Pathway Degradation)", 
                  desc: "针对特定的信号抑制蛋白进行动态监测。例如在 IL-1 或 TNFα 通路激活过程中，通过实时追踪 IkB 蛋白的降解动力学，评估药物对信号传导的抑制效果。" 
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

      {/* 3. Detailed Product Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center md:text-left">细胞因子产品列表 / Cytokine Portfolio</h2>
        <div className="overflow-hidden shadow-2xl rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-[#4B827E] text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-white/20">Ligand (配体)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-white/20">Targets (受体靶点)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider border-r border-white/20">MOA (作用机制)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Ligand Synonyms (别名)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {productData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50 hover:bg-teal-50/40 transition-colors'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-600 border-r border-slate-100">{row.ligand}</td>
                    <td className="px-6 py-4 text-sm text-[#1C2C5E] font-medium border-r border-slate-100">{row.target}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 italic border-r border-slate-100">{row.moa}</td>
                    <td className="px-6 py-4 text-xs text-slate-400 font-mono">{row.synonyms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm italic bg-slate-50 py-4 rounded-lg border border-dashed border-slate-300">
            * 数据源自 Eurofins DiscoverX 官方检测平台，如需特定批次数据或定制开发，请联系我们的技术专家。
          </p>
        </div>
      </section>
    </div>
  );
};

export default CytokineDetail;
