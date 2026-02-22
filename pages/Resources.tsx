
import React from 'react';
import CardGrid from '../components/CardGrid';
import { Page } from '../types';

interface ResourcesProps {
  onNavigate: (page: Page) => void;
}

const Resources: React.FC<ResourcesProps> = ({ onNavigate }) => {
  const resourceCategories = [
    {
      id: 'res1',
      title: '产品说明书 Datasheet',
      description: '详细的产品规格、批次信息、保存条件及主要性能指标，为您提供最直接的产品参考。',
      imageUrl: 'https://picsum.photos/seed/datasheet/400/300',
      badge: 'Product Info',
      action: () => onNavigate(Page.DatasheetList)
    },
    {
      id: 'res2',
      title: '用户操作手册 User Manual',
      description: '详尽的实验步骤、试剂准备、设备要求及常见问题解答，助力您顺利完成实验。',
      imageUrl: 'https://picsum.photos/seed/manual/400/300',
      badge: 'Support',
      action: () => onNavigate(Page.UserManual)
    },
    {
      id: 'res3',
      title: '验证数据 Qualification Data',
      description: '包括批间差稳定性、灵敏度验证、特异性检测等实验原始数据与质量控制报告。',
      imageUrl: 'https://picsum.photos/seed/quality/400/300',
      badge: 'Quality',
      action: () => onNavigate(Page.QualificationData)
    },
    {
      id: 'res4',
      title: '应用指南 Application Note',
      description: '针对特定研究领域的应用方案、实验技巧及成功案例分享，拓展您的研究思路。',
      imageUrl: 'https://picsum.photos/seed/appnote/400/300',
      badge: 'Technical',
      action: () => onNavigate(Page.ApplicationNote)
    },
    {
      id: 'res5',
      title: '参考文献 Reference',
      description: '整理汇集了使用本公司产品发表的高分 SCI 论文及行业标准文献引用。',
      imageUrl: 'https://picsum.photos/seed/ref/400/300',
      action: () => onNavigate(Page.Reference)
    },
    {
      id: 'res6',
      title: '其他资料 Others',
      description: '包括产品目录、企业画册、海报及相关的安全技术说明书 (MSDS) 等补充资料。',
      imageUrl: 'https://picsum.photos/seed/others/400/300',
      action: () => onNavigate(Page.OthersDoc)
    }
  ];

  return <CardGrid title="产品资料与下载" subtitle="获取最新的技术支持文档，加速您的实验进程" items={resourceCategories} />;
};

export default Resources;
