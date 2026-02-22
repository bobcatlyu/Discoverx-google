
import React from 'react';
import TargetDetailTemplate, { MoaItem, ProductRow } from '../components/TargetDetailTemplate';

const CHECKPOINT_HEADERS = ['细胞株', 'eXpress® kit', 'Bioassay kit'];

const CheckpointDetail: React.FC = () => {
  const intro = [
    "免疫检查点受体是调节免疫系统反应的关键分子，负责维持免疫耐受并防止自身免疫。在肿瘤免疫中，这些受体常被癌细胞利用来逃避免疫监视。",
    "Eurofins DiscoverX 提供了全球领先的免疫检查点检测平台，涵盖激动型和抑制型靶点。我们的细胞株平台不仅支持传统的配体结合阻断分析，还支持复杂的细胞内信号传导、受体内吞、受体二聚化及抗体依赖性细胞毒性 (ADCC) 效应评估。",
    "这些工具被广泛应用于治疗性抗体的筛选、效检 (Potency Assay) 以及作用机制研究。"
  ];
  const moas: MoaItem[] = [
    { 
      title: "信号转导 (Signaling)", 
      description: "利用 EFC 技术监测受体激活后招募蛋白（如 SHP-1/2）的过程。这种方法能直接反映抗体药物对受体功能的调节作用。" 
    },
    { 
      title: "配体展示 (Ligand-Presenting)", 
      description: "经过工程化改造的“配体细胞株”，稳定表达特定的免疫检查点配体（如 PD-L1, CD80），用于模拟抗原提呈细胞 (APC) 与 T 细胞的相互作用，是共刺激/共抑制实验的标准工具。" 
    },
    { 
      title: "受体内吞 (Internalization)", 
      description: "监测受体从细胞表面向胞内移动的过程。这对于开发靶向受体清除或 ADC 药物至关重要，能有效评估抗体诱导的靶点下调。" 
    },
    { 
      title: "受体二聚化 (Dimerization)", 
      description: "直接监测受体分子间的相互作用，揭示抗体如何通过诱导或阻断受体复合体的形成来发挥药效。" 
    },
    { 
      title: "FcγR 聚簇 (Clustering)", 
      description: "专门针对 Fc 受体设计的检测方案，评估抗体 Fc 段与 FcγR 之间的结合及诱导的受体聚簇效应。" 
    }
  ];
  const data: ProductRow[] = [
    { target: 'BCMA', moa: 'Internalization', statuses: ['✓', '-', '-'] },
    { target: 'BCMA', moa: 'Reporter', statuses: ['✓', '-', '-'] },
    { target: 'BTLA', moa: 'Signaling', statuses: ['✓', '-', '-'] },
    { target: 'CD28', moa: 'Signaling', statuses: ['✓', '-', '-'] },
    { target: 'CD33', moa: 'Internalization', statuses: ['✓', '-', '-'] },
    { target: 'CD47', moa: 'Ligand-Presenting', statuses: ['✓', '-', '-'] },
    { target: 'mCD80', moa: 'Ligand-Presenting', statuses: ['✓', '-', '-'] },
    { target: 'CD86', moa: 'Ligand-Presenting', statuses: ['✓', '-', '-'] },
    { target: 'CD137', moa: 'Signaling', statuses: ['✓', '-', '-'] },
    { target: 'CD200', moa: 'Ligand-Presenting', statuses: ['✓', '-', '-'] },
    { target: 'CD200R', moa: 'Signaling', statuses: ['✓', '-', '-'] },
    { target: 'CTLA4', moa: 'Signaling', statuses: ['✓', '-', '-'] },
    { target: 'mCTLA4', moa: 'Signaling', statuses: ['✓', '-', '-'] },
    { target: 'HVEM', moa: 'Ligand-Presenting', statuses: ['✓', '-', '-'] },
    { target: 'ICOS', moa: 'Signaling', statuses: ['✓', '-', '-'] },
    { target: 'LAG3', moa: 'Cytotoxicity', statuses: ['✓', '-', '-'] },
    { target: 'LAIR1', moa: 'Signaling', statuses: ['✓', '-', '-'] },
    { target: 'NIK', moa: 'Signaling', statuses: ['✓', '-', '-'] },
    { target: 'OX40', moa: 'Signaling', statuses: ['✓', '-', '-'] },
    { target: 'PD-1', moa: 'Signaling', statuses: ['✓', '-', '✓'] },
    { target: 'PD-1', moa: 'Reporter', statuses: ['✓', '-', '-'] },
    { target: 'PD-1', moa: 'Cytotoxicity', statuses: ['✓', '-', '-'] },
    { target: 'mPD-1', moa: 'Signaling', statuses: ['✓', '-', '-'] },
    { target: 'PD-L1', moa: 'Ligand-Presenting', statuses: ['✓', '-', '-'] },
    { target: 'PD-L1', moa: 'Cytotoxicity', statuses: ['✓', '-', '-'] },
    { target: 'mPD-L1', moa: 'Ligand-Presenting', statuses: ['✓', '-', '-'] },
    { target: 'PD-L2', moa: 'Ligand-Presenting', statuses: ['✓', '-', '-'] },
    { target: 'PD-L2', moa: 'Cytotoxicity', statuses: ['✓', '-', '-'] },
    { target: 'Siglec9', moa: 'Internalization', statuses: ['✓', '-', '-'] },
    { target: 'SIRPα', moa: 'Signaling', statuses: ['✓', '-', '✓'] },
    { target: 'TIM3', moa: 'Cytotoxicity', statuses: ['✓', '-', '-'] },
    { target: 'TIM3/TIM3', moa: 'Dimerization', statuses: ['✓', '✓', '-'] },
    { target: 'VISTA/VISTA', moa: 'Dimerization', statuses: ['✓', '✓', '-'] },
    { target: 'FcyRIa', moa: 'Clustering', statuses: ['✓', '-', '-'] },
    { target: 'FcyRIIa', moa: 'Clustering', statuses: ['✓', '-', '-'] },
    { target: 'FcyRIIIa', moa: 'Clustering', statuses: ['✓', '-', '-'] },
    { target: 'FcyRIIb', moa: 'Clustering', statuses: ['✓', '-', '-'] },
    { target: 'mFcyRIIb', moa: 'Clustering', statuses: ['✓', '-', '-'] }
  ];
  return <TargetDetailTemplate title="免疫检查点受体 Checkpoint Receptors" introText={intro} introImageUrl="https://picsum.photos/seed/checkpoint_lab/800/600" moaItems={moas} productData={data} productTableTitle="免疫检查点产品列表 (Checkpoint Portfolio)" customTypeHeaders={CHECKPOINT_HEADERS} />;
};

export default CheckpointDetail;
