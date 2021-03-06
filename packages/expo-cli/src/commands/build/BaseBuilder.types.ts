export type CommonOptions = {
  clearCredentials: boolean;
  publicUrl?: string;
  releaseChannel: string;
  publish: boolean;
  wait: boolean;
  skipWorkflowCheck?: boolean;
  parent?: { nonInteractive: boolean };
  config?: string;
};

export type IosOptions = CommonOptions & {
  type: 'archive' | 'simulator';
  clearDistCert: boolean;
  clearPushKey: boolean;
  clearPushCert: boolean;
  clearProvisioningProfile: boolean;
  revokeCredentials: boolean;
  appleId?: string;
  teamId?: string;
  distP12Path?: string;
  pushP12Path?: string;
  pushId?: string;
  pushP8Path?: string;
  provisioningProfilePath?: string;
  skipCredentialsCheck?: boolean;
  skipCredentialsValidation?: boolean;
};

export type AndroidOptions = CommonOptions & {
  type: 'app-bundle' | 'apk';
  keystorePath?: string;
  keystoreAlias?: string;
  generateKeystore: boolean;
  skipCredentialsCheck?: boolean;
};

export type BuilderOptions = Omit<Partial<IosOptions> & Partial<AndroidOptions>, 'type'> & {
  type?: string;
};
