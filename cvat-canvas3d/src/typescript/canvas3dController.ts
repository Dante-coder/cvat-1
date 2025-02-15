// Copyright (C) 2021-2022 Intel Corporation
// Copyright (C) 2022 CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT

import {
    Canvas3dModel, Mode, DrawData, ActiveElement, FocusData, GroupData, Configuration,
} from './canvas3dModel';

export interface Canvas3dController {
    readonly drawData: DrawData;
    readonly activeElement: ActiveElement;
    readonly selected: any;
    readonly focused: FocusData;
    readonly groupData: GroupData;
    readonly configuration: Configuration;
    readonly imageIsDeleted: boolean;
    mode: Mode;
    group(groupData: GroupData): void;
}

export class Canvas3dControllerImpl implements Canvas3dController {
    private model: Canvas3dModel;

    public constructor(model: Canvas3dModel) {
        this.model = model;
    }

    public set mode(value: Mode) {
        this.model.mode = value;
    }

    public get mode(): Mode {
        return this.model.mode;
    }

    public get drawData(): DrawData {
        return this.model.data.drawData;
    }

    public get activeElement(): ActiveElement {
        return this.model.data.activeElement;
    }

    public get selected(): any {
        return this.model.data.selected;
    }

    public get focused(): any {
        return this.model.data.focusData;
    }

    public get imageIsDeleted(): any {
        return this.model.imageIsDeleted;
    }

    public get groupData(): GroupData {
        return this.model.groupData;
    }

    public get configuration(): Configuration {
        return this.model.configuration;
    }

    public group(groupData: GroupData): void {
        this.model.group(groupData);
    }
}
