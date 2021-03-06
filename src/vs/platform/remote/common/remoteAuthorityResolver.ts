/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { createDecorator } from 'vs/platform/instantiation/common/instantiation';

export const IRemoteAuthorityResolverService = createDecorator<IRemoteAuthorityResolverService>('remoteAuthorityResolverService');

export interface ResolvedAuthority {
	readonly authority: string;
	readonly host: string;
	readonly port: number;
}

export interface IRemoteAuthorityResolverService {

	_serviceBrand: any;

	resolveAuthority(authority: string): Promise<ResolvedAuthority>;

	clearResolvedAuthority(authority: string): void;
	setResolvedAuthority(resolvedAuthority: ResolvedAuthority): void;
	setResolvedAuthorityError(authority: string, err: any): void;
}
