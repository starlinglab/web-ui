/**
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying
 * it.
 */
import { LitElement } from 'lit';
import '../../../assets/svg/monochrome/generic-info.svg';
import '../Icon';
import '../PanelSection';
declare global {
    interface HTMLElementTagNameMap {
        'cai-content-summary': ContentSummary;
    }
    namespace JSX {
        interface IntrinsicElements {
            'cai-content-summary': any;
        }
    }
}
export interface ContentSummaryConfig {
    stringMap: Record<string, string>;
}
declare const ContentSummary_base: (new (...args: any[]) => import("../../mixins/configurable").ConfigurableInterface<Record<string, any>>) & (new (...args: any[]) => import("../../mixins/panelSection").PanelSectionInterface<import("c2pa/src/selectors/selectGenerativeInfo").GenerativeInfo | null>) & typeof LitElement;
export declare class ContentSummary extends ContentSummary_base {
    static get styles(): import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1 | 2>;
}
export {};
