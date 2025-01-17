import { Log } from 'db'
import {
  Edge,
  Group,
  PublicTypebot,
  ResultValues,
  Typebot,
  Variable,
  VariableWithUnknowValue,
} from 'models'
import { TypebotViewerProps } from './components/TypebotViewer'
import { LinkedTypebot } from './providers/TypebotProvider'

export type InputSubmitContent = {
  label?: string
  value: string
  itemId?: string
}

export type EdgeId = string

export type LogicState = {
  isPreview: boolean
  apiHost: string
  typebot: TypebotViewerProps['typebot']
  linkedTypebots: LinkedTypebot[]
  currentTypebotId: string
  pushEdgeIdInLinkedTypebotQueue: (bot: {
    edgeId: string
    typebotId: string
  }) => void
  setCurrentTypebotId: (id: string) => void
  updateVariableValue: (variableId: string, value: unknown) => void
  updateVariables: (variables: VariableWithUnknowValue[]) => void
  injectLinkedTypebot: (typebot: Typebot | PublicTypebot) => LinkedTypebot
  onNewLog: (log: Omit<Log, 'id' | 'createdAt' | 'resultId'>) => void
  createEdge: (edge: Edge) => void
}

export type IntegrationState = {
  apiHost: string
  typebotId: string
  groupId: string
  blockId: string
  isPreview: boolean
  variables: Variable[]
  resultValues: ResultValues
  groups: Group[]
  resultId?: string
  updateVariables: (variables: VariableWithUnknowValue[]) => void
  updateVariableValue: (variableId: string, value: unknown) => void
  onNewLog: (log: Omit<Log, 'id' | 'createdAt' | 'resultId'>) => void
}
