
import React from 'react';
import TargetDetailTemplate, { MoaItem, ProductRow } from '../components/TargetDetailTemplate';

const EpigeneticDetail: React.FC = () => {
  const intro = [
    "表观遗传蛋白 (Epigenetic Proteins) 在不改变 DNA 序列的情况下调节基因表达，是调控生长发育、细胞分化 and 疾病发生的关键。它们包括“书写者”(Writers)、“阅读者”(Readers) 和“擦除者”(Erasers)，负责组蛋白 and DNA 的修饰。",
    "表观遗传调控失衡与癌症、神经退行性疾病和免疫紊乱密切相关。针对这些蛋白的药物研发已成为精准医疗的热点方向。Eurofins DiscoverX 提供了从 Targeted Protein Degradation (TPD) 到高灵敏度 Target Engagement 以及体外筛选的全面工具。"
  ];
  const moas: MoaItem[] = [
    { 
      title: "靶向蛋白降解 (Targeted Protein Degradation)", 
      description: "利用 PROTAC® 或分子胶等新型降解技术，通过 EFC 技术实时监测细胞内特定表观遗传靶标（如 BRD4, STAT3）的降解过程及动力学，是验证 TPD 药物效能的金标准。" 
    },
    { 
      title: "靶标结合 (Target Engagement)", 
      description: "在活细胞环境中，通过酶片段互补技术直接测定小分子与靶标蛋白（如溴域蛋白 Bromodomains）的物理结合。这种方法能更准确地预测药物在体内的实际活性。" 
    },
    { 
      title: "筛选与活性分析 (Screening & Activity Analysis)", 
      description: "针对表观遗传酶（如 HDACs, HMTs, HDMs），提供高纯度的活性重组蛋白。这些蛋白经过严格质量评估，适用于体外高通量筛选、酶动力学研究及抑制剂谱图分析。" 
    }
  ];
  
  const data: ProductRow[] = [
    { target: 'BRD4', moa: 'Targeted Protein Degradation', statuses: ['✓', '✓', '-'] },
    { target: 'STAT3', moa: 'Targeted Protein Degradation', statuses: ['✓', '✓', '-'] },
    { target: 'BAZ2A', moa: 'Target Engagement', statuses: ['✓', '-', '-'] },
    { target: 'BRD2(1)', moa: 'Target Engagement', statuses: ['✓', '✓', '-'] },
    { target: 'DNMT1', moa: 'Screening & Activity Analysis', statuses: ['-', '-', '✓'] },
    { target: 'DOT1L', moa: 'Screening & Activity Analysis', statuses: ['-', '-', '✓'] },
    { target: 'EHMT1', moa: 'Screening & Activity Analysis', statuses: ['-', '-', '✓'] },
    { target: 'WHSC1 (NSD2)', moa: 'Screening & Activity Analysis', statuses: ['-', '-', '✓'] }
  ];

  return (
    <TargetDetailTemplate 
      title="表观遗传蛋白 Epigenetic Proteins" 
      introText={intro} 
      introImageUrl="https://picsum.photos/seed/epigenetic_research/800/600" 
      moaItems={moas} 
      productData={data} 
      productTableTitle="表观遗传类产品列表 (Epigenetics Portfolio)" 
      customTypeHeaders={['细胞株', 'eXpress® kit', '重组蛋白']}
    />
  );
};

export default EpigeneticDetail;
