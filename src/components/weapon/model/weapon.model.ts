import {ChildrenLoadingFunction, FoldingType, RenamableNode, TreeModel, TreeModelSettings} from "ng2-tree";
import {TreeStatus} from "ng2-tree/src/tree.types";

export class WeaponModel implements TreeModel {
  value: string | RenamableNode;
  id?: string | number;
  children?: TreeModel[];
  loadChildren?: ChildrenLoadingFunction;
  settings?: TreeModelSettings;
  emitLoadNextLevel?: boolean;
  _status?: TreeStatus;
  _foldingType?: FoldingType;
  materials?: String;
  attack: number;
  slots?: any;
  coating?: any;
  rare: number;
}
