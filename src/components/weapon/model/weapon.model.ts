import {ChildrenLoadingFunction, FoldingType, RenamableNode, TreeModel, TreeModelSettings} from "ng2-tree";
import {TreeStatus} from "ng2-tree/src/tree.types";
import {SlotModel} from "./slot.model";
import {CraftMaterialModel} from "./craftmaterial.model";
import {ElementModel} from "./element.model";

export class WeaponModel implements TreeModel {
  value: string | RenamableNode;
  id?: string | number;
  children?: TreeModel[];
  parent?: number;
  childrenIds: number[];
  loadChildren?: ChildrenLoadingFunction;
  settings?: TreeModelSettings;
  emitLoadNextLevel?: boolean;
  _status?: TreeStatus;
  _foldingType?: FoldingType;
  materials?: CraftMaterialModel[];
  attack: number;
  slots?: SlotModel;
  coating?: any;
  rare: number;
  affinity?: any;
  element?: ElementModel;
  buildPath: number[];
}
