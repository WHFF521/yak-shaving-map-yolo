import type { Node } from 'vis-network'
import poisitions from './yak-map-pos.json'

export interface ProjectNode extends Partial<Node> {
  name: string
  display?: string
  link: string
  color?: string
  dashed?: boolean
  faded?: boolean
  from?: string[]
  deps?: string[]
  animateStop?: boolean
}

const colors = {
  vue: '#34ba67',
  YOLOv1: '#00DC82',
  YOLOv2: '#454ce1',
  unjs: '#982',
  YOLOv4: '#007ACC',
  vscode: '#007ACC',
  vitesse: '#895',
  slidev: '#2ae',
  vitest: '#82ba34',
  unplugin: '#525',
  eslint: '#53f',
  YOLOv3: '#CB7676',
  twoslash: '#183F66',
}

export const primary: ProjectNode[] = [
  {
    name: 'yolov5',
    display: 'YOLOv5',
    link: '',
    shape: 'circle',
    color: '#351',
    x: 0,
    y: 0,
  },
  {
    name: 'focus',
    display: 'Focus',
    link: '',
    color: '#351',
    from: ['yolov5'],
  },
  {
    name: 'autoanchor',
    display: 'autoanchor',
    link: '',
    color: '#351',
    from: ['yolov5'],
  },
  {
    name: 'becloss',
    display: 'BEC Loss',
    link: '',
    color: '#351',
    from: ['yolov5'],
  },
  {
    name: 'CIoULoss',
    display: 'CIoU Loss',
    link: '',
    color: '#351',
    from: ['yolov5'],
  },
  {
    name: 'YOLOv4',
    display: 'YOLOv4',
    link: '',
    shape: 'circle',
    color: colors.YOLOv4,
    from: ['yolov5'],
  },
  {
    name: 'CSPDarknet53',
    display: 'CSPDarknet53',
    link: '',
    color: colors.YOLOv4,
    from: ['YOLOv4'],
  },
  {
    name: 'CSPNet',
    display: 'CSPNet',
    link: '',
    color: colors.YOLOv4,
    from: ['CSPDarknet53'],
  },
  {
    name: 'Mish',
    display: 'Mish Activation',
    link: '',
    color: colors.YOLOv4,
    from: ['YOLOv4'],
  },
  {
    name: 'SPP',
    display: 'SPP',
    link: '',
    color: colors.YOLOv4,
    from: ['YOLOv4'],
  },
  {
    name: 'PANet',
    display: 'PANet',
    link: '',
    color: colors.YOLOv4,
    from: ['YOLOv4'],
  },
  {
    name: 'Bagoffreebies',
    display: 'Bag of freebies',
    link: '',
    color: colors.YOLOv4,
    from: ['YOLOv4'],
  },
  {
    name: 'Bagofspecials',
    display: 'Bag of specials',
    link: '',
    color: colors.YOLOv4,
    from: ['YOLOv4'],
  },
  {
    name: 'Mosaic',
    display: 'Mosaic',
    link: '',
    color: colors.YOLOv4,
    from: ['YOLOv4'],
  },
  {
    name: 'SAT',
    display: 'SAT',
    link: '',
    color: colors.YOLOv4,
    from: ['YOLOv4'],
  },
  {
    name: 'modifiedSAM',
    display: 'modified SAM',
    link: '',
    color: colors.YOLOv4,
    from: ['YOLOv4'],
  },
  {
    name: 'modifiedPAN',
    display: 'modified PAN',
    link: '',
    color: colors.YOLOv4,
    from: ['YOLOv4'],
  },
  {
    name: 'CmBN',
    display: 'CmBN',
    link: '',
    color: colors.YOLOv4,
    from: ['YOLOv4'],
  },
  {
    name: 'YOLOv3',
    display: 'YOLOv3',
    link: '',
    shape: 'circle',
    color: colors.YOLOv3,
    from: ['YOLOv4'],
  },
  {
    name: 'Darknet53',
    display: 'Darknet-53',
    link: '',
    color: colors.YOLOv3,
    from: ['YOLOv3'],
  },
  {
    name: 'FPN',
    display: 'FPN',
    link: '',
    color: colors.YOLOv3,
    from: ['YOLOv3'],
  },
  {
    name: 'independentlogisticclassifiers.',
    display: 'independent logistic classifiers.',
    link: '',
    color: colors.YOLOv3,
    from: ['YOLOv3'],
  },
  {
    name: 'YOLOv2',
    display: 'YOLOv2',
    link: '',
    shape: 'circle',
    color: colors.YOLOv2,
    from: ['YOLOv3'],
  },
  {
    name: 'FasterRCNN',
    display: 'Faster R-CNN',
    link: '',
    color: colors.YOLOv2,
    from: ['YOLOv2'],
  },
  {
    name: 'Anchor',
    display: 'Anchor',
    link: '',
    color: colors.YOLOv2,
    from: ['FasterRCNN'],
  },
  {
    name: 'K-means',
    display: 'K-means',
    link: '',
    color: colors.YOLOv2,
    from: ['Anchor'],
  },
  {
    name: 'Darknet19',
    display: 'Darknet-19',
    link: '',
    color: colors.YOLOv2,
    from: ['YOLOv2'],
  },
  {
    name: 'BatchNormalization',
    display: 'Batch Normalization',
    link: '',
    color: colors.YOLOv2,
    from: ['Darknet19'],
  },
  {
    name: 'YOLOv1',
    display: 'YOLOv1',
    link: '',
    shape: 'circle',
    color: colors.YOLOv1,
    from: ['YOLOv2'],
  },
  {
    name: 'regressionproblem',
    display: 'regression problem',
    link: '',
    color: colors.YOLOv1,
    from: ['YOLOv1'],
  },
  {
    name: 'neuralnetwork',
    display: 'neural network',
    link: '',
    color: colors.YOLOv1,
    from: ['YOLOv1'],
  },
  {
    name: 'convolutionallayers',
    display: 'convolutional layers',
    link: '',
    color: colors.YOLOv1,
    from: ['YOLOv1'],
  },
  {
    name: 'fullyconnectedlayers',
    display: 'fully connected layers',
    link: '',
    color: colors.YOLOv1,
    from: ['YOLOv1'],
  },
  {
    name: 'reductionlayers',
    display: 'reduction layers',
    link: '',
    color: colors.YOLOv1,
    from: ['YOLOv1'],
  },
]

export const secondary: ProjectNode[] = [
  
]

secondary.forEach((p, idx) => {
  p.faded = true
  if (idx)
    p.animateStop = false
})

export const all = [
  ...primary,
  ...secondary,
]

for (const [id, pos] of Object.entries(poisitions) as [string, { x: number, y: number }][]) {
  if (!pos)
    continue
  const project = all.find(p => p.name === id)
  if (project)
    Object.assign(project, pos)
}

export {
  poisitions,
}
