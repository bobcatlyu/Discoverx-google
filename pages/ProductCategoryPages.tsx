
import React from 'react';
import CardGrid from '../components/CardGrid';
import { Page } from '../types';

interface ProductCategoryPageProps {
  onNavigate?: (page: Page) => void;
}

export const ProductTypesPage: React.FC<ProductCategoryPageProps> = ({ onNavigate }) => {
  const categories = [
    { 
      id: 'c1', 
      title: '商业化稳转细胞株', 
      description: '提供超过 1,000 个独特靶点的功能性稳转细胞株，覆盖 GPCR、激酶、离子通道及免疫检查点，具有卓越的遗传稳定性。', 
      imageUrl: 'https://picsum.photos/seed/stablecell/400/300', 
      badge: 'Validated Cell Lines',
      action: onNavigate ? () => onNavigate(Page.CellLine) : undefined
    },
    { 
      id: 'c2', 
      title: '即用型 eXpress® Kit', 
      description: '全包式即用型检测盒，包含预包装冷冻细胞及配套试剂。解冻即用，24-48 小时内获得高质量实验结果。', 
      imageUrl: 'https://picsum.photos/seed/kit-science/400/300', 
      badge: 'Assay-Ready',
      action: onNavigate ? () => onNavigate(Page.ExpressKit) : undefined
    },
    { 
      id: 'c3', 
      title: 'Bioassay Kit', 
      description: '专为生物药效价评估与中和抗体检测优化。符合 CMC 及监管要求，支持 4PL 数据拟合。', 
      imageUrl: 'https://picsum.photos/seed/bioassay_kits/400/300', 
      badge: 'Potency Assay',
      action: onNavigate ? () => onNavigate(Page.BioassayKit) : undefined
    },
    { 
      id: 'c4', 
      title: '工具箱产品', 
      description: '包括克隆载体、反转录颗粒及亲本细胞株，助力快速构建定制化检测系统。', 
      imageUrl: 'https://picsum.photos/seed/toolbox/400/300',
      action: onNavigate ? () => onNavigate(Page.Toolbox) : undefined
    },
    { 
      id: 'c5', 
      title: '检测试剂盒', 
      description: '高灵敏度的 cAMP 监测、EFC 检测底物及各类功能性分析配套试剂盒。', 
      imageUrl: 'https://picsum.photos/seed/reagents/400/300',
      action: onNavigate ? () => onNavigate(Page.DetectionKit) : undefined
    },
    { 
      id: 'c6', 
      title: '试剂耗材', 
      description: 'AssayComplete™ 细胞培养、解冻及铺板试剂，确保实验一致性与稳定性。', 
      imageUrl: 'https://picsum.photos/seed/culture/400/300',
      action: onNavigate ? () => onNavigate(Page.Reagent) : undefined
    },
    { 
      id: 'c7', 
      title: '膜制品', 
      description: '高质量纯化膜制品，富集高密度活性受体蛋白，适用于配体结合实验。', 
      imageUrl: 'https://picsum.photos/seed/membrane/400/300',
      action: onNavigate ? () => onNavigate(Page.MembranePrep) : undefined
    },
    { 
      id: 'c8', 
      title: '重组酶类产品', 
      description: '高纯度重组激酶、磷酸酶及表观遗传酶，适用于体外生化筛选与动力学研究。', 
      imageUrl: 'https://picsum.photos/seed/enzyme_lab/400/300',
      action: onNavigate ? () => onNavigate(Page.Enzyme) : undefined
    },
    { 
      id: 'c9', 
      title: 'Calixar 膜蛋白', 
      description: '利用专利表面活性剂技术，在不添加去垢剂的情况下提取天然构象的膜蛋白（GPCR/离子通道）。', 
      imageUrl: 'https://picsum.photos/seed/calixar_3d/400/300',
      badge: 'Patented Technology',
      action: onNavigate ? () => onNavigate(Page.Calixar) : undefined
    },
  ];
  return <CardGrid title="产品类型" subtitle="提供全方位的生命科学研究工具与定制化解决方案" items={categories} />;
};

export const TargetsPage: React.FC<ProductCategoryPageProps> = ({ onNavigate }) => {
  const targets = [
    { 
      id: 't1', 
      title: 'G蛋白偶联受体 GPCR', 
      description: '真核生物中最大且功能最多样的膜受体家族，调控广泛的生理过程。', 
      imageUrl: 'https://picsum.photos/seed/gpcr_new/400/300',
      action: onNavigate ? () => onNavigate(Page.Gpcr) : undefined
    },
    { 
      id: 't2', 
      title: '细胞因子受体 Cytokine Receptors', 
      description: '识别白介素、干扰素等分子，在免疫应答及造血调节中起关键作用。', 
      imageUrl: 'https://picsum.photos/seed/cytokine/400/300',
      action: onNavigate ? () => onNavigate(Page.CytokineReceptors) : undefined
    },
    { 
      id: 't3', 
      title: '免疫检查点受体 Checkpoint Receptors', 
      description: '调节免疫细胞活性，是现代肿瘤免疫治疗药物研发的核心靶点。', 
      imageUrl: 'https://picsum.photos/seed/checkpoint/400/300',
      action: onNavigate ? () => onNavigate(Page.CheckpointReceptors) : undefined
    },
    { 
      id: 't4', 
      title: '激酶受体RTK', 
      description: '催化蛋白质磷酸化的核心酶类，调节细胞生长、分裂及代谢信号传导。', 
      imageUrl: 'https://picsum.photos/seed/kinase_rtk/400/300',
      action: onNavigate ? () => onNavigate(Page.KinaseReceptors) : undefined
    },
    { 
      id: 't5', 
      title: '核激素受体 NHR', 
      description: '受配体激活的转录因子，响应类固醇、甲状腺激素等分子调节基因表达。', 
      imageUrl: 'https://picsum.photos/seed/nhr/400/300',
      action: onNavigate ? () => onNavigate(Page.Nhr) : undefined
    },
    { 
      id: 't6', 
      title: '离子通道 Ion Channels', 
      description: '控制离子跨膜流动的孔道蛋白，对神经肌肉兴奋及电信号传导至关重要。', 
      imageUrl: 'https://picsum.photos/seed/ion_channel/400/300',
      action: onNavigate ? () => onNavigate(Page.IonChannels) : undefined
    },
    { 
      id: 't7', 
      title: '表观遗传蛋白 Epigenetic Proteins', 
      description: '调控染色质重塑及 DNA 修饰，在不改变序列的情况下调节基因功能。', 
      imageUrl: 'https://picsum.photos/seed/epigenetic/400/300',
      action: onNavigate ? () => onNavigate(Page.EpigeneticProteins) : undefined
    },
  ];
  return <CardGrid title="靶点分类" subtitle="针对不同生物靶点提供专业检测服务" items={targets} />;
};

export const MechanismsPage: React.FC<ProductCategoryPageProps> = ({ onNavigate }) => {
  const mechanisms = [
    { 
      id: 'm1', 
      title: '受体二聚化 Dimerization', 
      description: '监测受体复合物的形成，深入理解信号转导的起始步骤。', 
      imageUrl: 'https://picsum.photos/seed/dimer/400/300',
      action: onNavigate ? () => onNavigate(Page.DimerizationDetail) : undefined
    },
    { 
      id: 'm2', 
      title: '受体内吞 Internalization', 
      description: '定量追踪受体从质膜向胞内移动的过程，是 ADC 药物开发的关键。', 
      imageUrl: 'https://picsum.photos/seed/internal/400/300',
      action: onNavigate ? () => onNavigate(Page.InternalizationDetail) : undefined
    },
    { 
      id: 'm3', 
      title: '蛋白间相互作用 PPI', 
      description: '在活细胞环境中研究蛋白质分子的物理结合与复合物动态。', 
      imageUrl: 'https://picsum.photos/seed/ppi/400/300',
      action: onNavigate ? () => onNavigate(Page.PpiDetail) : undefined
    },
    { 
      id: 'm4', 
      title: '信号通路 Reporter/Degradation', 
      description: '全方位追踪下游信号放大、蛋白稳定性及亚细胞定位变化。', 
      imageUrl: 'https://picsum.photos/seed/signal/400/300',
      action: onNavigate ? () => onNavigate(Page.SignalPathwayDetail) : undefined
    },
    { 
      id: 'm5', 
      title: '细胞毒性效应 Cytotoxicity', 
      description: '高效测定效应细胞对靶细胞的杀杀效率，支持 ADCC 及 CAR-T 研究。', 
      imageUrl: 'https://picsum.photos/seed/toxic/400/300',
      action: onNavigate ? () => onNavigate(Page.CytotoxicityDetail) : undefined
    },
    { 
      id: 'm6', 
      title: '靶向蛋白降解 TPD', 
      description: '实时监测 PROTAC 等药物诱导的内源性目标蛋白降解动力学。', 
      imageUrl: 'https://picsum.photos/seed/tpd/400/300',
      action: onNavigate ? () => onNavigate(Page.TpdDetail) : undefined
    },
    { 
      id: 'm7', 
      title: '靶标结合 Target Engagement', 
      description: '直接测定小分子化合物与活细胞内目标靶点的物理结合强度。', 
      imageUrl: 'https://picsum.photos/seed/engage/400/300',
      action: onNavigate ? () => onNavigate(Page.TargetEngagementDetail) : undefined
    },
  ];
  return <CardGrid title="作用机制" subtitle="深入理解分子的生物学行为与药物交互过程" items={mechanisms} />;
};

// Added ProductCategoryPageProps to fix property 'onNavigate' missing error which also caused IntrinsicAttributes error in App.tsx usage
export const CustomDevPage: React.FC<ProductCategoryPageProps> = ({ onNavigate }) => {
  const customItems = [
    {
      id: 'cd1',
      title: '细胞株定制',
      description: '定制化构建稳定高表达细胞系，支持多种启动子、多拷贝整合及单克隆验证。',
      imageUrl: 'https://picsum.photos/seed/custom_cell/400/300',
      badge: 'Expert Service',
      action: onNavigate ? () => onNavigate(Page.CustomAssayDevelopment) : undefined
    },
    {
      id: 'cd2',
      title: 'Bioassay 开发',
      description: '基于 EFC 技术，为创新药提供从可行性研究到方法学验证的全流程开发。',
      imageUrl: 'https://picsum.photos/seed/bioassay_dev/400/300',
      badge: 'Advanced',
      action: onNavigate ? () => onNavigate(Page.BioassayDevelopment) : undefined
    },
    {
      id: 'cd3',
      title: '样品检测服务',
      description: '利用成熟检测平台，为客户样品提供快速、精准的功能性分析服务。',
      imageUrl: 'https://picsum.photos/seed/express_detect/400/300',
      action: onNavigate ? () => onNavigate(Page.SampleTesting) : undefined
    },
    {
      id: 'cd4',
      title: '化合物功能筛选',
      description: '针对 GPCR、激酶及离子通道等靶点的大规模化合物筛选支持。',
      imageUrl: 'https://picsum.photos/seed/compound_screen/400/300',
      action: onNavigate ? () => onNavigate(Page.FunctionalScreening) : undefined
    }
  ];
  return <CardGrid title="定制开发" subtitle="灵活的科研定制化方案，加速您的药物研发进程" items={customItems} />;
};
