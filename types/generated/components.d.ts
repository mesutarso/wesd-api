import type { Schema, Struct } from '@strapi/strapi';

export interface ComposantsContract extends Struct.ComponentSchema {
  collectionName: 'components_composants_contracts';
  info: {
    description: '';
    displayName: 'contract';
    icon: 'calendar';
  };
  attributes: {
    comments: Schema.Attribute.Text;
    contact_salesman: Schema.Attribute.String;
    magasin: Schema.Attribute.String;
    model: Schema.Attribute.String;
    salesman: Schema.Attribute.String;
    serial_number: Schema.Attribute.String;
    statut: Schema.Attribute.Enumeration<['pending', 'validated', 'rejected']>;
  };
}

export interface ComposantsIcsInvestigatorsSurvey
  extends Struct.ComponentSchema {
  collectionName: 'components_composants_ics_investigators_surveys';
  info: {
    description: '';
    displayName: 'ICSInvestigatorsSurvey';
    icon: 'information';
  };
  attributes: {
    date: Schema.Attribute.Date;
    doYouGetConsentement: Schema.Attribute.Boolean;
    doYouTakeCaptures: Schema.Attribute.Boolean;
    doYouTouchICS: Schema.Attribute.Boolean;
    HaveYouIntroducedSurvey: Schema.Attribute.Boolean;
    haveYouSeenICSAshes: Schema.Attribute.Boolean;
    isAPrimaryCook: Schema.Attribute.Boolean;
    IsWarmOrCold: Schema.Attribute.Enumeration<['warm', 'cold']>;
    signature: Schema.Attribute.Text;
  };
}

export interface ComposantsIcssUpervisorSurvey extends Struct.ComponentSchema {
  collectionName: 'components_composants_icss_upervisor_surveys';
  info: {
    description: '';
    displayName: 'ICSSUpervisorSurvey';
    icon: 'chartPie';
  };
  attributes: {
    comments: Schema.Attribute.String;
    date: Schema.Attribute.Date;
    signature: Schema.Attribute.Text;
    statut: Schema.Attribute.Enumeration<
      ['pending', 'rejected', 'validation']
    > &
      Schema.Attribute.DefaultTo<'pending'>;
  };
}

export interface ComposantsIdentity extends Struct.ComponentSchema {
  collectionName: 'components_composants_identities';
  info: {
    description: '';
    displayName: 'identity';
  };
  attributes: {
    adresse: Schema.Attribute.Text;
    birthday: Schema.Attribute.Date;
    education: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    firstName: Schema.Attribute.String;
    lastName: Schema.Attribute.String;
    names: Schema.Attribute.String & Schema.Attribute.Unique;
    nickName: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    revenue: Schema.Attribute.String;
    sexe: Schema.Attribute.Enumeration<['homme', 'femme', 'autre']>;
  };
}

export interface ComposantsUsageRateSurveys extends Struct.ComponentSchema {
  collectionName: 'components_composants_usage_rate_surveys';
  info: {
    description: '';
    displayName: 'ICSSurveys';
    icon: 'attachment';
  };
  attributes: {
    acceptance_capture: Schema.Attribute.Boolean;
    captures: Schema.Attribute.JSON;
    date: Schema.Attribute.Date;
    differenceOfTraditionalCharcolAndICS: Schema.Attribute.Boolean;
    frequencyUsingPerDay: Schema.Attribute.Enumeration<
      ['once', 'twice', 'threeTimes', 'fourTimes', 'more']
    >;
    healthIssues: Schema.Attribute.String;
    improvedCharcolUsed: Schema.Attribute.Integer;
    improvedConditionsHealth: Schema.Attribute.Boolean;
    isCharcoalConsumptionsVaryInDifferentSaisons: Schema.Attribute.Boolean;
    isPrincipalUsed: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    isSalesmanExplainedProICS: Schema.Attribute.Boolean;
    isSalesmanProvidedTraning: Schema.Attribute.Boolean;
    isTraditionnalCharcolUsed: Schema.Attribute.Boolean;
    lessSmokeEmitted: Schema.Attribute.Boolean;
    other: Schema.Attribute.Integer;
    rangeOfEconomicsExpenses: Schema.Attribute.Enumeration<
      ['p1_20', 'p21_40', 'p41_60', 'p61_80', 'p81_90']
    >;
    signature: Schema.Attribute.Text;
    timeSinceLastUsed: Schema.Attribute.Enumeration<
      ['today', 'yesterday', 'twoDaysAgo', 'AweekAgo']
    >;
    traditionalCharColUsed: Schema.Attribute.Integer;
    yearsUsedICS: Schema.Attribute.Integer;
  };
}

export interface ComposantsUsageSurveys extends Struct.ComponentSchema {
  collectionName: 'components_composants_usage_surveys';
  info: {
    description: '';
    displayName: 'BaselineSurveys';
    icon: 'link';
  };
  attributes: {
    averageMoneyPayPerDay: Schema.Attribute.Integer;
    estimatedFrequencyOfUsage: Schema.Attribute.Integer;
    EstimatedFuelBurnedPerDay: Schema.Attribute.String;
    numberOfPeopleServed: Schema.Attribute.Integer;
    signature: Schema.Attribute.Text;
    sourceOfFuel: Schema.Attribute.Enumeration<
      ['achete', 'recolte_en_main', 'autres']
    >;
    typeOfFireplaceUsed: Schema.Attribute.Enumeration<
      ['brasero_simple', 'feu_a_3_pierres', 'autres']
    >;
    typeOfFuel: Schema.Attribute.Enumeration<['charbon', 'bois', 'autres']>;
    usageTasks: Schema.Attribute.Enumeration<
      ['commercial', 'institutionnel', 'domestique', 'autre']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'composants.contract': ComposantsContract;
      'composants.ics-investigators-survey': ComposantsIcsInvestigatorsSurvey;
      'composants.icss-upervisor-survey': ComposantsIcssUpervisorSurvey;
      'composants.identity': ComposantsIdentity;
      'composants.usage-rate-surveys': ComposantsUsageRateSurveys;
      'composants.usage-surveys': ComposantsUsageSurveys;
    }
  }
}
