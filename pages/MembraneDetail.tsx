
import React, { useState } from 'react';

const MembraneDetail: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const ionChannelMembranes = [
    { target: 'hERG', moa: 'Ion Channel', cat: 'CYL4039', desc: 'PrecisION® Recombinant hERG Potassium Ion Channel Membrane Preparation' },
    { target: 'nAChR α3/β4', moa: 'Ion Channel', cat: 'CYL4057M', desc: 'PrecisION® Recombinant hnAChR α3/β4 Ion Channel Membrane Preparation' },
  ];

  const gpcrMembranes = [
    { target: 'ADCYAP1R1', moa: 'cAMP & Calcium', cat: 'HTS114M', desc: 'ChemiScreen PAC1-long Receptor Membrane Preparation' },
    { target: 'ADORA1', moa: 'cAMP & Calcium', cat: 'HTS047M', desc: 'ChemiScreen A1 Adenosine Receptor Membrane Preparation' },
    { target: 'ADORA3', moa: 'cAMP & Calcium', cat: 'HTS052M', desc: 'ChemiScreen A3 Adenosine Receptor Membrane Preparation' },
    { target: 'ADRA1A', moa: 'cAMP & Calcium', cat: 'HTS087M', desc: 'ChemiScreen α1A Adrenergic Receptor Membrane Preparation' },
    { target: 'ADRA1B', moa: 'cAMP & Calcium', cat: 'HTS158M', desc: 'ChemiScreen α1B Adrenergic Receptor Membrane Preparation' },
    { target: 'ADRA1D (82-572)', moa: 'cAMP & Calcium', cat: 'HTS216M', desc: 'ChemiScreen α1D Adrenergic Receptor with N-terminal truncation Membrane Preparation' },
    { target: 'ADRA2A', moa: 'cAMP & Calcium', cat: 'HTS096M', desc: 'ChemiScreen α2A Adrenergic Receptor Membrane Preparation' },
    { target: 'ADRA2B', moa: 'cAMP & Calcium', cat: 'HTS157M', desc: 'ChemiScreen α2B Adrenergic Receptor Membrane Preparation' },
    { target: 'ADRB1', moa: 'cAMP & Calcium', cat: 'HTS104M', desc: 'ChemiScreen β1 Adrenoceptor Membrane Preparation' },
    { target: 'ADRB2', moa: 'cAMP & Calcium', cat: 'HTS073M', desc: 'ChemiScreen β2 Adrenoceptor Membrane Preparation' },
    { target: 'ADRB3', moa: 'cAMP & Calcium', cat: 'HTS159M', desc: 'ChemiScreen β3 Adrenoceptor Membrane Preparation' },
    { target: 'AGTR1', moa: 'cAMP & Calcium', cat: 'HTS064M', desc: 'ChemiScreen AT1 Angiotensin II Receptor Membrane Preparation' },
    { target: 'AGTR2', moa: 'cAMP & Calcium', cat: 'HTS208M', desc: 'ChemiScreen AT2 Angiotensin II Receptor Membrane Preparation' },
    { target: 'AGTRL1', moa: 'cAMP & Calcium', cat: 'HTS068M', desc: 'ChemiScreen APJ Apelin Receptor Membrane Preparation' },
    { target: 'AVPR1A', moa: 'cAMP & Calcium', cat: 'HTS059M', desc: 'ChemiScreen V1A Vasopressin Receptor Membrane Preparation' },
    { target: 'AVPR1B', moa: 'cAMP & Calcium', cat: 'HTS136M', desc: 'ChemiScreen V1B Vasopressin Receptor Membrane Preparation' },
    { target: 'AVPR2', moa: 'cAMP & Calcium', cat: 'HTS060M', desc: 'ChemiScreen V2 Vasopressin Receptor Membrane Preparation' },
    { target: 'BDKRB2', moa: 'cAMP & Calcium', cat: 'HTS041M', desc: 'ChemiScreen B2 Bradykinin Receptor Membrane Preparation' },
    { target: 'BRS3', moa: 'cAMP & Calcium', cat: 'HTS160M', desc: 'ChemiScreen BB3 Bombesin Receptor Membrane Preparation' },
    { target: 'C3AR1', moa: 'cAMP & Calcium', cat: 'HTS016M', desc: 'ChemiScreen C3aR Anaphylatoxin Receptor Membrane Preparation' },
    { target: 'C5AR1', moa: 'cAMP & Calcium', cat: 'HTS017M', desc: 'ChemiScreen C5aR Anaphylatoxin Receptor Membrane Preparation' },
    { target: 'CALCR - RAMP1', moa: 'cAMP & Calcium', cat: 'HTS127M', desc: 'ChemiScreen AMY1 Calcitonin Receptor Membrane Preparation' },
    { target: 'CALCRL - RAMP1', moa: 'cAMP & Calcium', cat: 'HTS172M', desc: 'ChemiScreen CGRP1 Calcitonin Receptor Membrane Preparation' },
    { target: 'CCKAR', moa: 'cAMP & Calcium', cat: 'HTS184M', desc: 'ChemiScreen CCK1 Cholecystokinin Receptor Membrane Preparation' },
    { target: 'CCKBR', moa: 'cAMP & Calcium', cat: 'HTS083M', desc: 'ChemiScreen CCK2 Cholecystokinin Receptor Membrane Preparation' },
    { target: 'CCR1', moa: 'cAMP & Calcium', cat: 'HTS005M', desc: 'ChemiScreen CCR1 Chemokine Receptor Membrane Preparation' },
    { target: 'CCR2', moa: 'cAMP & Calcium', cat: 'HTS007M', desc: 'ChemiScreen CCR2B Chemokine Receptor Membrane Preparation' },
    { target: 'CCR5', moa: 'cAMP & Calcium', cat: 'HTS010M', desc: 'ChemiScreen Rhesus Macaque CCR5 Chemokine Receptor Membrane Preparation' },
    { target: 'CCR6', moa: 'cAMP & Calcium', cat: 'HTS011M', desc: 'ChemiScreen CCR6 Receptor Chemokine Receptor Membrane Preparation' },
    { target: 'CCR8', moa: 'cAMP & Calcium', cat: 'HTS013M', desc: 'ChemiScreen CCR8 Chemokine Receptor Membrane Preparation' },
    { target: 'CCR9', moa: 'cAMP & Calcium', cat: 'HTS036M', desc: 'ChemiScreen CCR9 Chemokine Receptor Membrane Preparation' },
    { target: 'CHRM1', moa: 'cAMP & Calcium', cat: 'HTS044M', desc: 'ChemiScreen M1 Muscarinic Acetylcholine Receptor Membrane Preparation' },
    { target: 'CHRM2', moa: 'cAMP & Calcium', cat: 'HTS115M', desc: 'ChemiScreen M2 Muscarinic Acetylcholine Receptor Membrane Preparation' },
    { target: 'CHRM3', moa: 'cAMP & Calcium', cat: 'HTS116M', desc: 'ChemiScreen M3 Muscarinic Acetylcholine Receptor Membrane Preparation' },
    { target: 'CHRM4', moa: 'cAMP & Calcium', cat: 'HTS117M', desc: 'ChemiScreen M4 Muscarinic Acetylcholine Receptor Membrane Preparation' },
    { target: 'CHRM5', moa: 'cAMP & Calcium', cat: 'HTS075M', desc: 'ChemiScreen M5 Muscarinic Acetylcholine Receptor Membrane Preparation' },
    { target: 'CNR1', moa: 'cAMP & Calcium', cat: 'HTS019M', desc: 'ChemiScreen CB1 Cannabinoid Receptor Membrane Preparation' },
    { target: 'CNR2', moa: 'cAMP & Calcium', cat: 'HTS020M', desc: 'ChemiScreen CB2 Cannabinoid Receptor Membrane Preparation' },
    { target: 'CRHR1', moa: 'cAMP & Calcium', cat: 'HTS023M', desc: 'ChemiScreen CRF1 Receptor Membrane Preparation' },
    { target: 'CRHR2', moa: 'cAMP & Calcium', cat: 'HTS024M', desc: 'ChemiScreen CRF2 Neuropeptide Receptor Membrane Preparation' },
    { target: 'CX3CR1', moa: 'cAMP & Calcium', cat: 'HTS015M', desc: 'ChemiScreen CX3CR1 Chemokine Receptor Membrane Preparation' },
    { target: 'CXCR1', moa: 'cAMP & Calcium', cat: 'HTS001M', desc: 'ChemiScreen CXCR1 Chemokine Receptor Membrane Preparation' },
    { target: 'CXCR2', moa: 'cAMP & Calcium', cat: 'HTS002M', desc: 'ChemiScreen CXCR2 Receptor Membrane Preparation' },
    { target: 'CXCR3', moa: 'cAMP & Calcium', cat: 'HTS003M', desc: 'ChemiScreen CXCR3 Chemokine Receptor Membrane Preparation' },
    { target: 'CXCR4', moa: 'cAMP & Calcium', cat: 'HTS004M', desc: 'ChemiScreen CXCR4 Chemokine Receptor Membrane Preparation' },
    { target: 'CXCR6', moa: 'cAMP & Calcium', cat: 'HTS054M', desc: 'ChemiScreen CXCR6 Chemokine Receptor Membrane Preparation' },
    { target: 'CXCR7', moa: 'cAMP & Calcium', cat: 'HTS138M', desc: 'ChemiScreen CXCR7 Chemokine Receptor Membrane Preparation' },
    { target: 'DRD1', moa: 'cAMP & Calcium', cat: 'HTS102M', desc: 'ChemiScreen D1 Dopamine Receptor Membrane Preparation' },
    { target: 'DRD2', moa: 'cAMP & Calcium', cat: 'HTS039M', desc: 'ChemiScreen D2 Dopamine Receptor Membrane Preparation' },
    { target: 'DRD3', moa: 'cAMP & Calcium', cat: 'HTS103M', desc: 'ChemiScreen D3 Dopamine Receptor Membrane Preparation' },
    { target: 'DRD5', moa: 'cAMP & Calcium', cat: 'HTS129M', desc: 'ChemiScreen D5 Dopamine Receptor Membrane Preparation' },
    { target: 'EDNRA', moa: 'cAMP & Calcium', cat: 'HTS070M', desc: 'ChemiScreen ETA Endothelin Receptor Membrane Preparation' },
    { target: 'EDNRB', moa: 'cAMP & Calcium', cat: 'HTS046M', desc: 'ChemiScreen ETB Endothelin Receptor Membrane Preparation' },
    { target: 'F2RL1', moa: 'cAMP & Calcium', cat: 'HTS037M', desc: 'ChemiScreen PAR2 Receptor Membrane Preparation' },
    { target: 'FPR2', moa: 'cAMP & Calcium', cat: 'HTS056M', desc: 'ChemiScreen FPRL1 N-Formylpeptide Receptor Membrane Preparation' },
    { target: 'GABBR1 - GABBR2', moa: 'cAMP & Calcium', cat: 'HTS119M', desc: 'ChemiScreen GABAB Receptor Membrane Preparation' },
    { target: 'GALR1', moa: 'cAMP & Calcium', cat: 'HTS094M', desc: 'ChemiScreen GAL1 Galanin Receptor Membrane Preparation' },
    { target: 'GALR2', moa: 'cAMP & Calcium', cat: 'HTS186M', desc: 'ChemiScreen GAL2 Galanin Receptor Membrane Preparation' },
    { target: 'GCGR', moa: 'cAMP & Calcium', cat: 'HTS112M', desc: 'ChemiScreen Glucagon Receptor Membrane Preparation' },
    { target: 'GHSR', moa: 'cAMP & Calcium', cat: 'HTS187M', desc: 'ChemiScreen Ghrelin Receptor Membrane Preparation' },
    { target: 'GIPR', moa: 'cAMP & Calcium', cat: 'HTS134M', desc: 'ChemiScreen GIP Glucagon Receptor Membrane Preparation' },
    { target: 'GLP1R', moa: 'cAMP & Calcium', cat: 'HTS163M', desc: 'ChemiScreen GLP-1 Receptor Membrane Preparation' },
    { target: 'GNRHR', moa: 'cAMP & Calcium', cat: 'HTS027M', desc: 'ChemiScreen GnRH Receptor Membrane Preparation' },
    { target: 'GRM2', moa: 'cAMP & Calcium', cat: 'HTS146M', desc: 'ChemiScreen mGLU2 Metabotropic Glutamate Receptor Membrane Preparation' },
    { target: 'GRPR', moa: 'cAMP & Calcium', cat: 'HTS084M', desc: 'ChemiScreen BB2 Bombesin Receptor Membrane Preparation' },
    { target: 'HRH1', moa: 'cAMP & Calcium', cat: 'HTS050M', desc: 'ChemiScreen H1 Histamine Receptor Membrane Preparation' },
    { target: 'HRH2', moa: 'cAMP & Calcium', cat: 'HTS086M', desc: 'ChemiScreen H2 Histamine Receptor Membrane Preparation' },
    { target: 'HTR1B', moa: 'cAMP & Calcium', cat: 'HTS108M', desc: 'ChemiScreen 5-HT1B Serotonin Receptor Membrane Preparation' },
    { target: 'HTR2C', moa: 'cAMP & Calcium', cat: 'HTS132M', desc: 'ChemiScreen 5-HT2C Serotonin Receptor Membrane Preparation' },
    { target: 'HTR4B', moa: 'cAMP & Calcium', cat: 'HTS110M', desc: 'ChemiScreen 5-HT4B Serotonin Receptor Membrane Preparation' },
    { target: 'LTB4R', moa: 'cAMP & Calcium', cat: 'HTS042M', desc: 'ChemiScreen BLT1 Leukotriene Receptor Membrane Preparation' },
    { target: 'MC1R', moa: 'cAMP & Calcium', cat: 'HTS156M', desc: 'ChemiScreen MC1 Melanocortin Receptor Membrane Preparation' },
    { target: 'MC3R', moa: 'cAMP & Calcium', cat: 'HTS022M', desc: 'ChemiScreen MC3 Melanocortin Receptor Membrane Preparation' },
    { target: 'MC5R', moa: 'cAMP & Calcium', cat: 'HTS155M', desc: 'ChemiScreen MC5 Melanocortin Receptor Membrane Preparation' },
    { target: 'MCHR1', moa: 'cAMP & Calcium', cat: 'HTS025M', desc: 'ChemiScreen MCH1 Melanin-Concentrating Hormone Receptor Membrane Preparation' },
    { target: 'MLNR', moa: 'cAMP & Calcium', cat: 'HTS121M', desc: 'ChemiScreen Motilin Receptor Membrane Preparation' },
    { target: 'MRGPRD', moa: 'cAMP & Calcium', cat: 'HTS206M', desc: 'ChemiScreen MRGPRD Receptor Membrane Preparation' },
    { target: 'NMBR', moa: 'cAMP & Calcium', cat: 'HTS123M', desc: 'ChemiScreen BB1 Bombesin/Neuromedin B Receptor Membrane Preparation' },
    { target: 'NMU1R', moa: 'cAMP & Calcium', cat: 'HTS062M', desc: 'ChemiScreen NMU1 Neuromedin Receptor Membrane Preparation' },
    { target: 'NPBWR1', moa: 'cAMP & Calcium', cat: 'HTS180M', desc: 'ChemiScreen NPBW1 Neuropeptide B/W Receptor Membrane Preparation' },
    { target: 'NPBWR2', moa: 'cAMP & Calcium', cat: 'HTS181M', desc: 'ChemiScreen NPBW2 Neuropeptide B/W Receptor Membrane Preparation' },
    { target: 'NPY2R', moa: 'cAMP & Calcium', cat: 'HTS066M', desc: 'ChemiScreen Y2 Neuropeptide Y Receptor Membrane Preparation' },
    { target: 'NPY4R', moa: 'cAMP & Calcium', cat: 'HTS204M', desc: 'ChemiScreen Y4 Neuropeptide Y Receptor Membrane Preparation' },
    { target: 'NTSR1', moa: 'cAMP & Calcium', cat: 'HTS034M', desc: 'ChemiScreen NTR1 Neurotensin Receptor Membrane Preparation' },
    { target: 'OPRD1', moa: 'cAMP & Calcium', cat: 'HTS100M', desc: 'ChemiScreen δ Opioid Receptor Membrane Preparation' },
    { target: 'OPRK1', moa: 'cAMP & Calcium', cat: 'HTS095M', desc: 'ChemiScreen κ Opioid Receptor Membrane Preparation' },
    { target: 'OPRL1', moa: 'cAMP & Calcium', cat: 'HTS040M', desc: 'ChemiScreen NOP/ORL1 Opioid Receptor Membrane Preparation' },
    { target: 'OPRM1', moa: 'cAMP & Calcium', cat: 'HTS101M', desc: 'ChemiScreen μ Opioid Receptor Membrane Preparation' },
    { target: 'OXTR', moa: 'cAMP & Calcium', cat: 'HTS090M', desc: 'ChemiScreen OT Oxytocin Receptor Membrane Preparation' },
    { target: 'PRLHR', moa: 'cAMP & Calcium', cat: 'HTS057M', desc: 'ChemiScreen PrP/GPR10 Prolactin-Releasing Peptide Receptor Membrane Preparation' },
    { target: 'PROKR1', moa: 'cAMP & Calcium', cat: 'HTS074M', desc: 'ChemiScreen PK1 Prokineticin Receptor Membrane Preparation' },
    { target: 'PROKR2', moa: 'cAMP & Calcium', cat: 'HTS182M', desc: 'ChemiScreen PK2 Prokineticin Receptor Membrane Preparation' },
    { target: 'PTGDR', moa: 'cAMP & Calcium', cat: 'HTS091M', desc: 'ChemiScreen DP Prostanoid Receptor Membrane Preparation' },
    { target: 'PTGER1', moa: 'cAMP & Calcium', cat: 'HTS099M', desc: 'ChemiScreen EP1 Prostanoid Receptor Membrane Preparation' },
    { target: 'PTGER2', moa: 'cAMP & Calcium', cat: 'HTS185M', desc: 'ChemiScreen EP2 Prostanoid Receptor Membrane Preparation' },
    { target: 'PTGER3', moa: 'cAMP & Calcium', cat: 'HTS092M', desc: 'ChemiScreen EP3 Prostanoid Receptor Membrane Preparation' },
    { target: 'PTGER4', moa: 'cAMP & Calcium', cat: 'HTS142M', desc: 'ChemiScreen EP4 Prostanoid Receptor Membrane Preparation' },
    { target: 'S1PR1', moa: 'cAMP & Calcium', cat: 'HTS176M', desc: 'ChemiScreen S1P1 Lysophospholipid Receptor Membrane Preparation' },
    { target: 'S1PR2', moa: 'cAMP & Calcium', cat: 'HTS078M', desc: 'ChemiScreen S1P2 Lysophospholipid Receptor Membrane Preparation' },
    { target: 'S1PR3', moa: 'cAMP & Calcium', cat: 'HTS097M', desc: 'ChemiScreen S1P3 Lysophospholipid Receptor Membrane Preparation' },
    { target: 'S1PR5', moa: 'cAMP & Calcium', cat: 'HTS193M', desc: 'ChemiScreen S1P5 Lysophospholipid Receptor Membrane Preparation' },
    { target: 'SSTR1', moa: 'cAMP & Calcium', cat: 'HTS170M', desc: 'ChemiScreen SST1 Somatostatin Receptor Membrane Preparation' },
    { target: 'SSTR2', moa: 'cAMP & Calcium', cat: 'HTS028M', desc: 'ChemiScreen SST2 Somatostatin Receptor Membrane Preparation' },
    { target: 'SSTR3', moa: 'cAMP & Calcium', cat: 'HTS171M', desc: 'ChemiScreen SST3 Somatostatin Receptor Membrane Preparation' },
    { target: 'SSTR4', moa: 'cAMP & Calcium', cat: 'HTS125M', desc: 'ChemiScreen SST4 Somatostatin Receptor Membrane Preparation' },
    { target: 'SSTR5', moa: 'cAMP & Calcium', cat: 'HTS139M', desc: 'ChemiScreen SST5 Somatostatin Receptor Membrane Preparation' },
    { target: 'TACR1', moa: 'cAMP & Calcium', cat: 'HTS080M', desc: 'ChemiScreen NK1 Tachykinin Receptor Membrane Preparation' },
    { target: 'TBXA2R', moa: 'cAMP & Calcium', cat: 'HTS081M', desc: 'ChemiScreen TP Prostanoid Receptor Membrane Preparation' },
    { target: 'UTS2R', moa: 'cAMP & Calcium', cat: 'HTS033M', desc: 'ChemiScreen GPR14 Urotensin II Receptor Membrane Preparation' },
    { target: 'VIPR1', moa: 'cAMP & Calcium', cat: 'HTS043M', desc: 'ChemiScreen VPAC1 Receptor Membrane Preparation' },
    { target: 'VIPR2', moa: 'cAMP & Calcium', cat: 'HTS079M', desc: 'ChemiScreen VPAC2 Receptor Membrane Preparation' },
  ];

  const filteredGpcrs = gpcrMembranes.filter(item => 
    item.target.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white">
      {/* 1. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-[#1C2C5E] mb-6">膜制品 (Membrane Preparations)</h1>
            <div className="h-1 w-20 bg-[#4B827E] mb-8"></div>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              ChemiScreen™ 膜制品是由稳定表达特定生物靶点（如 GPCR 或离子通道）的工程化细胞株提取的高质量纯化膜。这些制品在膜表面保留了高密度的靶点蛋白，并处于功能活跃状态。
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              膜制品是研究放射性配体结合实验 (Radioligand Binding)、GTPγS 结合实验以及基于构象改变的生化分析的理想工具。它们为药物初筛及亲和力验证提供了一致且可靠的底物，极大地简化了实验准备流程。
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/membrane_science/800/600" 
              alt="Membrane Preparation Technology" 
              className="rounded-2xl shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* 2. MOA Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1C2C5E] mb-10 text-center">作用机制与技术规格</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-[#4B827E] mb-4">制备工艺</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                通过大规模培养经过严格验证的稳定细胞株，利用氮压空化 (Nitrogen Cavitation) 或机械匀浆技术轻柔破碎细胞，随后经过多级差速离心过程富集胞膜组分。
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 最大程度保留受体天然跨膜构象</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 批次间活性与蛋白浓度高度一致</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> 优化缓冲液体系，确保长期冷冻稳定性</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="text-xl font-bold text-[#4B827E] mb-4">实验应用</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                膜制品主要用于测定配体与受体的结合常数 (Kd) 以及竞争性结合的抑制常数 (Ki)。
              </p>
              <ul className="text-xs text-slate-500 space-y-2">
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> <strong>Radioligand Binding:</strong> 经典的药理学受体亲和力检测</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> <strong>GTPγS Binding:</strong> 评估激动剂对 G 蛋白激活的效能</li>
                <li className="flex items-center"><span className="text-[#4B827E] mr-2">●</span> <strong>HTRF/AlphaLISA:</strong> 均相无洗涤结合实验底物</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product List Table Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <h2 className="text-3xl font-bold text-[#1C2C5E] mb-12 text-center md:text-left">膜制品产品列表 / Membrane Portfolio</h2>
        
        {/* Ion Channel Section */}
        <div className="mb-16 overflow-hidden shadow-xl rounded-xl border border-slate-200">
          <div className="bg-[#4B827E] px-6 py-4 flex justify-between items-center">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">离子通道膜制品 / Ion Channel Membrane Preparations</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Target</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">MOA</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Cat No.</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {ionChannelMembranes.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#1C2C5E]">{row.target}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{row.moa}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-slate-600">{row.cat}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* GPCR Section */}
        <div className="overflow-hidden shadow-xl rounded-xl border border-slate-200">
          <div className="bg-[#4B827E] px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">GPCR 膜制品 / GPCR Membrane Preparations</h3>
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="搜索靶点或货号..." 
                className="w-full pl-8 pr-4 py-1.5 text-xs rounded-full border-none focus:ring-2 focus:ring-white/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div className="overflow-x-auto max-h-[800px]">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50 sticky top-0 z-20">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 shadow-sm">Target</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 shadow-sm">MOA</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 shadow-sm">Cat No.</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 shadow-sm">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {filteredGpcrs.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#1C2C5E]">{row.target}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{row.moa}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-slate-600">{row.cat}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredGpcrs.length === 0 && (
            <div className="p-12 text-center text-slate-400">未找到相关膜制品，请尝试其他关键词。</div>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm italic bg-slate-50 py-4 rounded-lg border border-dashed border-slate-300">
            * 本列表包含 Eurofins DiscoverX 的核心膜制品库，如有特定亚型需求或需大包装报价，请联系我们的销售专员。
          </p>
        </div>
      </section>
    </div>
  );
};

export default MembraneDetail;
