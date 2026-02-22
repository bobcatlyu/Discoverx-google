
import React from 'react';
import TargetDetailTemplate, { MoaItem, ProductRow } from '../components/TargetDetailTemplate';

const KINASE_HEADERS = ['细胞株', 'eXpress® kit', 'Bioassay kit'];

const KinaseDetail: React.FC = () => {
  const intro = [
    "用于分析 RTK 二聚化、磷酸化、内吞和 SH2 招募的细胞水平检测",
    "受体酪氨酸激酶 (RTK) 在生长、运动、分化和代谢等多种细胞过程中发挥重要作用。最近的大规模基因组研究揭示了编码 RTK 的基因（如 EGFR、HER2/ErbB2 和 MET 等）中存在各种改变。RTK 信号传导失调会导致多种人类疾病，尤其是多种癌症。人类癌症中异常的 RTK 激活主要由四种机制介导：功能获得性突变、基因组扩增、染色体重排和/或自分泌激活。",
    "Eurofins DiscoverX® 为 RTK 和与胞质酪氨酸激酶 (CTK) 相关的细胞因子受体提供 PathHunter® 细胞水平检测方案。这些创新的检测方法为受体激活提供了细胞生理环境，有助于识别新型抑制剂和治疗性抗体。利用 PathHunter 检测，可以通过分析 RTK 和细胞因子受体的二聚化、磷酸化、内吞和 SH2 招募来评估其功能活性。"
  ];
  const moas: MoaItem[] = [
    { 
      title: "受体二聚化 (Receptor Dimerization)", 
      description: "监测受体酪氨酸激酶 (RTK) 在配体诱导下形成的同源或异源二聚体。这是激酶激活的起始步骤，对于评估单抗或双抗药物的激动活性及阻断效能至关重要。" 
    },
    { 
      title: "SH2 蛋白招募 (SH2 Protein Recruitment)", 
      description: "监测活化磷酸化的激酶招募含有 SH2 结构域的信号转导蛋白（如 Shc1, PLCγ）。利用专有 EFC 技术直接在活细胞中定量评估激酶的功能性激活，具有极高的生物学相关性。" 
    },
    { 
      title: "受体内吞 (Receptor Internalization)", 
      description: "定量追踪激酶受体在配体或抗体诱导下从细胞膜向内体室的移动过程。这对于 ADC 药物开发、抗体介导的靶点下调以及受体脱敏研究具有核心参考价值。" 
    }
  ];
  const data: ProductRow[] = [
    { target: 'EGFR', moa: 'SH2 Recruitment / Dimerization', statuses: ['✓', '✓', '✓'] },
    { target: 'HER2', moa: 'Heterodimerization', statuses: ['✓', '✓', '✓'] },
    { target: 'MET', moa: 'SH2 Recruitment / Internalization', statuses: ['✓', '✓', '-'] },
    { target: 'IGF1R', moa: 'SH2 Recruitment', statuses: ['✓', '✓', '-'] },
    { target: 'BTK', moa: 'Target Engagement', statuses: ['✓', '✓', '✓'] },
    { target: 'ALK', moa: 'Signaling', statuses: ['✓', '✓', '-'] }
  ];
  return <TargetDetailTemplate title="激酶受体RTK" introText={intro} introImageUrl="https://picsum.photos/seed/kinase_lab/800/600" moaItems={moas} productData={data} productTableTitle="激酶类产品列表 (Kinase Portfolio)" customTypeHeaders={KINASE_HEADERS} />;
};

export default KinaseDetail;
