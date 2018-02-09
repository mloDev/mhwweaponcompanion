import {ChildrenLoadingFunction, FoldingType, RenamableNode, TreeModel, TreeModelSettings} from "ng2-tree";
import {TreeStatus} from "ng2-tree/src/tree.types";
import {SlotModel} from "./slot.model";
import {MaterialModel} from "./material.model";
import {ElementModel} from "./element.model";

export class WeaponModel implements TreeModel {
  value: string | RenamableNode;
  id?: string | number;
  children?: TreeModel[];
  loadChildren?: ChildrenLoadingFunction;
  settings?: TreeModelSettings;
  emitLoadNextLevel?: boolean;
  _status?: TreeStatus;
  _foldingType?: FoldingType;
  materials?: MaterialModel[];
  attack: number;
  slots?: SlotModel;
  coating?: any;
  rare: number;
  affinity?: any;
  element?: ElementModel;
}
