import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateCategory = {
  __typename?: 'AggregateCategory';
  _count?: Maybe<CategoryCountAggregate>;
  _max?: Maybe<CategoryMaxAggregate>;
  _min?: Maybe<CategoryMinAggregate>;
};

export type AggregateProduct = {
  __typename?: 'AggregateProduct';
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
};

export type AggregateReview = {
  __typename?: 'AggregateReview';
  _avg?: Maybe<ReviewAvgAggregate>;
  _count?: Maybe<ReviewCountAggregate>;
  _max?: Maybe<ReviewMaxAggregate>;
  _min?: Maybe<ReviewMinAggregate>;
  _sum?: Maybe<ReviewSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type AggregateUserTokens = {
  __typename?: 'AggregateUserTokens';
  _count?: Maybe<UserTokensCountAggregate>;
  _max?: Maybe<UserTokensMaxAggregate>;
  _min?: Maybe<UserTokensMinAggregate>;
};

export type Category = {
  __typename?: 'Category';
  _count?: Maybe<CategoryCount>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type CategoryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  products: Scalars['Int']['output'];
};


export type CategoryCountProductsArgs = {
  where?: InputMaybe<ProductWhereInput>;
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  slug: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type CategoryCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutCategoryInput>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryCreateNestedOneWithoutProductsInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<CategoryCreateWithoutProductsInput>;
};

export type CategoryCreateOrConnectWithoutProductsInput = {
  create: CategoryCreateWithoutProductsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutProductsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  _count?: Maybe<CategoryCountAggregate>;
  _max?: Maybe<CategoryMaxAggregate>;
  _min?: Maybe<CategoryMinAggregate>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<CategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<CategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<CategoryMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<ProductOrderByRelationAggregateInput>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export enum CategoryScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Slug = 'slug',
  UpdatedAt = 'updatedAt'
}

export type CategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type CategoryUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCategoryNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<CategoryCreateWithoutProductsInput>;
  update?: InputMaybe<CategoryUpdateWithoutProductsInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutProductsInput>;
};

export type CategoryUpdateWithoutProductsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithoutProductsInput = {
  create: CategoryCreateWithoutProductsInput;
  update: CategoryUpdateWithoutProductsInput;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** New user data */
export type CreateOneUserArgsCustom = {
  avater?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumUserAccountStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<UserAccountStatus>;
};

export type EnumUserAccountStatusFilter = {
  equals?: InputMaybe<UserAccountStatus>;
  in?: InputMaybe<Array<UserAccountStatus>>;
  not?: InputMaybe<NestedEnumUserAccountStatusFilter>;
  notIn?: InputMaybe<Array<UserAccountStatus>>;
};

export type EnumUserAccountStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserAccountStatusFilter>;
  _min?: InputMaybe<NestedEnumUserAccountStatusFilter>;
  equals?: InputMaybe<UserAccountStatus>;
  in?: InputMaybe<Array<UserAccountStatus>>;
  not?: InputMaybe<NestedEnumUserAccountStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UserAccountStatus>>;
};

export type EnumUserRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<UserRole>;
};

export type EnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type EnumUserRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserRoleFilter>;
  _min?: InputMaybe<NestedEnumUserRoleFilter>;
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type LoginResponsce = {
  __typename?: 'LoginResponsce';
  accessToken?: Maybe<Scalars['String']['output']>;
  isAuthenticated: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<UserForResponsce>;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminLogin?: Maybe<LoginResponsce>;
  adminRegister?: Maybe<DefaultResponsce>;
  createManyCategory: AffectedRowsOutput;
  createManyProduct: AffectedRowsOutput;
  createManyReview: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUserTokens: AffectedRowsOutput;
  createOneCategory: Category;
  createOneProduct: Product;
  createOneReview: Review;
  createOneUser: User;
  createOneUserTokens: UserTokens;
  deleteManyCategory: AffectedRowsOutput;
  deleteManyProduct: AffectedRowsOutput;
  deleteManyReview: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserTokens: AffectedRowsOutput;
  deleteOneCategory?: Maybe<Category>;
  deleteOneProduct?: Maybe<Product>;
  deleteOneReview?: Maybe<Review>;
  deleteOneUser?: Maybe<User>;
  deleteOneUserTokens?: Maybe<UserTokens>;
  forgetPassword?: Maybe<DefaultResponsce>;
  login?: Maybe<LoginResponsce>;
  logout?: Maybe<DefaultResponsce>;
  passwordResetTokenVerify?: Maybe<DefaultResponsce>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  register?: Maybe<DefaultResponsce>;
  resetPassByVerficationLink?: Maybe<DefaultResponsce>;
  updateManyCategory: AffectedRowsOutput;
  updateManyProduct: AffectedRowsOutput;
  updateManyReview: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUserTokens: AffectedRowsOutput;
  updateOneCategory?: Maybe<Category>;
  updateOneProduct?: Maybe<Product>;
  updateOneReview?: Maybe<Review>;
  updateOneUser?: Maybe<User>;
  updateOneUserTokens?: Maybe<UserTokens>;
  updateProfile?: Maybe<DefaultResponsce>;
  uploadFile?: Maybe<FileUploadResponsce>;
  upsertOneCategory: Category;
  upsertOneProduct: Product;
  upsertOneReview: Review;
  upsertOneUser: User;
  upsertOneUserTokens: UserTokens;
  verifyEmail?: Maybe<DefaultResponsce>;
};


export type MutationAdminLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationAdminRegisterArgs = {
  input: CreateOneUserArgsCustom;
};


export type MutationCreateManyCategoryArgs = {
  data: Array<CategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyProductArgs = {
  data: Array<ProductCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyReviewArgs = {
  data: Array<ReviewCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserTokensArgs = {
  data: Array<UserTokensCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateOneProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateOneReviewArgs = {
  data: ReviewCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneUserTokensArgs = {
  data: UserTokensCreateInput;
};


export type MutationDeleteManyCategoryArgs = {
  where?: InputMaybe<CategoryWhereInput>;
};


export type MutationDeleteManyProductArgs = {
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationDeleteManyReviewArgs = {
  where?: InputMaybe<ReviewWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyUserTokensArgs = {
  where?: InputMaybe<UserTokensWhereInput>;
};


export type MutationDeleteOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteOneProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteOneReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneUserTokensArgs = {
  where: UserTokensWhereUniqueInput;
};


export type MutationForgetPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationPasswordResetTokenVerifyArgs = {
  token: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  input: CreateOneUserArgsCustom;
};


export type MutationResetPassByVerficationLinkArgs = {
  input: ReesetPassByLinkInput;
};


export type MutationUpdateManyCategoryArgs = {
  data: CategoryUpdateManyMutationInput;
  where?: InputMaybe<CategoryWhereInput>;
};


export type MutationUpdateManyProductArgs = {
  data: ProductUpdateManyMutationInput;
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationUpdateManyReviewArgs = {
  data: ReviewUpdateManyMutationInput;
  where?: InputMaybe<ReviewWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyUserTokensArgs = {
  data: UserTokensUpdateManyMutationInput;
  where?: InputMaybe<UserTokensWhereInput>;
};


export type MutationUpdateOneCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateOneProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateOneReviewArgs = {
  data: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneUserTokensArgs = {
  data: UserTokensUpdateInput;
  where: UserTokensWhereUniqueInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateOneUserArgsCustom;
  passwordInput: UpdateProfilePaswordArgs;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUpsertOneCategoryArgs = {
  create: CategoryCreateInput;
  update: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertOneProductArgs = {
  create: ProductCreateInput;
  update: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertOneReviewArgs = {
  create: ReviewCreateInput;
  update: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneUserTokensArgs = {
  create: UserTokensCreateInput;
  update: UserTokensUpdateInput;
  where: UserTokensWhereUniqueInput;
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String']['input'];
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumUserAccountStatusFilter = {
  equals?: InputMaybe<UserAccountStatus>;
  in?: InputMaybe<Array<UserAccountStatus>>;
  not?: InputMaybe<NestedEnumUserAccountStatusFilter>;
  notIn?: InputMaybe<Array<UserAccountStatus>>;
};

export type NestedEnumUserAccountStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserAccountStatusFilter>;
  _min?: InputMaybe<NestedEnumUserAccountStatusFilter>;
  equals?: InputMaybe<UserAccountStatus>;
  in?: InputMaybe<Array<UserAccountStatus>>;
  not?: InputMaybe<NestedEnumUserAccountStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UserAccountStatus>>;
};

export type NestedEnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type NestedEnumUserRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserRoleFilter>;
  _min?: InputMaybe<NestedEnumUserRoleFilter>;
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Product = {
  __typename?: 'Product';
  _count?: Maybe<ProductCount>;
  category: Category;
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  images: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  orderStartPrice: Scalars['Float']['output'];
  price: Scalars['Float']['output'];
  reveiws: Array<Review>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type ProductReveiwsArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  orderStartPrice?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

export type ProductAvgOrderByAggregateInput = {
  orderStartPrice?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type ProductCount = {
  __typename?: 'ProductCount';
  reveiws: Scalars['Int']['output'];
};


export type ProductCountReveiwsArgs = {
  where?: InputMaybe<ReviewWhereInput>;
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int']['output'];
  categoryId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  images: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  orderStartPrice: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
  slug: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ProductCountOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  orderStartPrice?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductCreateInput = {
  category: CategoryCreateNestedOneWithoutProductsInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  name: Scalars['String']['input'];
  orderStartPrice: Scalars['Float']['input'];
  price: Scalars['Float']['input'];
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutProductInput>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateManyCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  name: Scalars['String']['input'];
  orderStartPrice: Scalars['Float']['input'];
  price: Scalars['Float']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateManyCategoryInputEnvelope = {
  data: Array<ProductCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductCreateManyInput = {
  categoryId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  name: Scalars['String']['input'];
  orderStartPrice: Scalars['Float']['input'];
  price: Scalars['Float']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<ProductCreateManyCategoryInputEnvelope>;
};

export type ProductCreateNestedOneWithoutReveiwsInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutReveiwsInput>;
  create?: InputMaybe<ProductCreateWithoutReveiwsInput>;
};

export type ProductCreateOrConnectWithoutCategoryInput = {
  create: ProductCreateWithoutCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutReveiwsInput = {
  create: ProductCreateWithoutReveiwsInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  name: Scalars['String']['input'];
  orderStartPrice: Scalars['Float']['input'];
  price: Scalars['Float']['input'];
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutProductInput>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateWithoutReveiwsInput = {
  category: CategoryCreateNestedOneWithoutProductsInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  name: Scalars['String']['input'];
  orderStartPrice: Scalars['Float']['input'];
  price: Scalars['Float']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateimagesInput = {
  set: Array<Scalars['String']['input']>;
};

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy';
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  orderStartPrice: Scalars['Float']['output'];
  price: Scalars['Float']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductListRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orderStartPrice?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductMaxOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  orderStartPrice?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orderStartPrice?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductMinOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  orderStartPrice?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProductAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProductCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProductSumOrderByAggregateInput>;
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  orderStartPrice?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  category?: InputMaybe<CategoryOrderByWithRelationInput>;
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  orderStartPrice?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  reveiws?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductRelationFilter = {
  is?: InputMaybe<ProductWhereInput>;
  isNot?: InputMaybe<ProductWhereInput>;
};

export enum ProductScalarFieldEnum {
  CategoryId = 'categoryId',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Images = 'images',
  Name = 'name',
  OrderStartPrice = 'orderStartPrice',
  Price = 'price',
  Slug = 'slug',
  UpdatedAt = 'updatedAt'
}

export type ProductScalarWhereInput = {
  AND?: InputMaybe<Array<ProductScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereInput>>;
  categoryId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  images?: InputMaybe<StringNullableListFilter>;
  name?: InputMaybe<StringFilter>;
  orderStartPrice?: InputMaybe<FloatFilter>;
  price?: InputMaybe<FloatFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  categoryId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  images?: InputMaybe<StringNullableListFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  orderStartPrice?: InputMaybe<FloatWithAggregatesFilter>;
  price?: InputMaybe<FloatWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  orderStartPrice?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

export type ProductSumOrderByAggregateInput = {
  orderStartPrice?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type ProductUpdateInput = {
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutProductsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderStartPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutProductNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderStartPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateManyWithWhereWithoutCategoryInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithoutCategoryNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<ProductCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type ProductUpdateOneRequiredWithoutReveiwsNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutReveiwsInput>;
  create?: InputMaybe<ProductCreateWithoutReveiwsInput>;
  update?: InputMaybe<ProductUpdateWithoutReveiwsInput>;
  upsert?: InputMaybe<ProductUpsertWithoutReveiwsInput>;
};

export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
  data: ProductUpdateWithoutCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithoutCategoryInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderStartPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutProductNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutReveiwsInput = {
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutProductsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderStartPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateimagesInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
  create: ProductCreateWithoutCategoryInput;
  update: ProductUpdateWithoutCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithoutReveiwsInput = {
  create: ProductCreateWithoutReveiwsInput;
  update: ProductUpdateWithoutReveiwsInput;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  category?: InputMaybe<CategoryRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  images?: InputMaybe<StringNullableListFilter>;
  name?: InputMaybe<StringFilter>;
  orderStartPrice?: InputMaybe<FloatFilter>;
  price?: InputMaybe<FloatFilter>;
  reveiws?: InputMaybe<ReviewListRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCategory: AggregateCategory;
  aggregateProduct: AggregateProduct;
  aggregateReview: AggregateReview;
  aggregateUser: AggregateUser;
  aggregateUserTokens: AggregateUserTokens;
  categories: Array<Category>;
  category?: Maybe<Category>;
  findFirstCategory?: Maybe<Category>;
  findFirstCategoryOrThrow?: Maybe<Category>;
  findFirstProduct?: Maybe<Product>;
  findFirstProductOrThrow?: Maybe<Product>;
  findFirstReview?: Maybe<Review>;
  findFirstReviewOrThrow?: Maybe<Review>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  findFirstUserTokens?: Maybe<UserTokens>;
  findFirstUserTokensOrThrow?: Maybe<UserTokens>;
  findManyUserTokens: Array<UserTokens>;
  findUniqueUserTokens?: Maybe<UserTokens>;
  findUniqueUserTokensOrThrow?: Maybe<UserTokens>;
  getCategory?: Maybe<Category>;
  getProduct?: Maybe<Product>;
  getReview?: Maybe<Review>;
  getUser?: Maybe<User>;
  groupByCategory: Array<CategoryGroupBy>;
  groupByProduct: Array<ProductGroupBy>;
  groupByReview: Array<ReviewGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUserTokens: Array<UserTokensGroupBy>;
  healthCheck: Scalars['String']['output'];
  me?: Maybe<UserForResponsce>;
  meAdmin?: Maybe<UserForResponsce>;
  product?: Maybe<Product>;
  products: Array<Product>;
  review?: Maybe<Review>;
  reviews: Array<Review>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateCategoryArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryAggregateProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryAggregateReviewArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateUserTokensArgs = {
  cursor?: InputMaybe<UserTokensWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserTokensOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserTokensWhereInput>;
};


export type QueryCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryFindFirstCategoryArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryFindFirstCategoryOrThrowArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryFindFirstProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryFindFirstProductOrThrowArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryFindFirstReviewArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryFindFirstReviewOrThrowArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserTokensArgs = {
  cursor?: InputMaybe<UserTokensWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserTokensScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserTokensOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserTokensWhereInput>;
};


export type QueryFindFirstUserTokensOrThrowArgs = {
  cursor?: InputMaybe<UserTokensWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserTokensScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserTokensOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserTokensWhereInput>;
};


export type QueryFindManyUserTokensArgs = {
  cursor?: InputMaybe<UserTokensWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserTokensScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserTokensOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserTokensWhereInput>;
};


export type QueryFindUniqueUserTokensArgs = {
  where: UserTokensWhereUniqueInput;
};


export type QueryFindUniqueUserTokensOrThrowArgs = {
  where: UserTokensWhereUniqueInput;
};


export type QueryGetCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryGetProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryGetReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGroupByCategoryArgs = {
  by: Array<CategoryScalarFieldEnum>;
  having?: InputMaybe<CategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryGroupByProductArgs = {
  by: Array<ProductScalarFieldEnum>;
  having?: InputMaybe<ProductScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryGroupByReviewArgs = {
  by: Array<ReviewScalarFieldEnum>;
  having?: InputMaybe<ReviewScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ReviewOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByUserTokensArgs = {
  by: Array<UserTokensScalarFieldEnum>;
  having?: InputMaybe<UserTokensScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserTokensOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserTokensWhereInput>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type QueryReviewsArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type ReesetPassByLinkInput = {
  confirmPass: Scalars['String']['input'];
  newPass: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type Review = {
  __typename?: 'Review';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  product: Product;
  productId: Scalars['String']['output'];
  star: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type ReviewAvgAggregate = {
  __typename?: 'ReviewAvgAggregate';
  star?: Maybe<Scalars['Float']['output']>;
};

export type ReviewAvgOrderByAggregateInput = {
  star?: InputMaybe<SortOrder>;
};

export type ReviewCountAggregate = {
  __typename?: 'ReviewCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  message: Scalars['Int']['output'];
  productId: Scalars['Int']['output'];
  star: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type ReviewCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  star?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ReviewCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  product: ProductCreateNestedOneWithoutReveiwsInput;
  star: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutReveiwsInput;
};

export type ReviewCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  star: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type ReviewCreateManyProductInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  star: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type ReviewCreateManyProductInputEnvelope = {
  data: Array<ReviewCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  star: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReviewCreateManyUserInputEnvelope = {
  data: Array<ReviewCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutProductInput>>;
  createMany?: InputMaybe<ReviewCreateManyProductInputEnvelope>;
};

export type ReviewCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReviewCreateManyUserInputEnvelope>;
};

export type ReviewCreateOrConnectWithoutProductInput = {
  create: ReviewCreateWithoutProductInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateOrConnectWithoutUserInput = {
  create: ReviewCreateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateWithoutProductInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  star: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutReveiwsInput;
};

export type ReviewCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  product: ProductCreateNestedOneWithoutReveiwsInput;
  star: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReviewGroupBy = {
  __typename?: 'ReviewGroupBy';
  _avg?: Maybe<ReviewAvgAggregate>;
  _count?: Maybe<ReviewCountAggregate>;
  _max?: Maybe<ReviewMaxAggregate>;
  _min?: Maybe<ReviewMinAggregate>;
  _sum?: Maybe<ReviewSumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  star: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type ReviewListRelationFilter = {
  every?: InputMaybe<ReviewWhereInput>;
  none?: InputMaybe<ReviewWhereInput>;
  some?: InputMaybe<ReviewWhereInput>;
};

export type ReviewMaxAggregate = {
  __typename?: 'ReviewMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  star?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ReviewMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  star?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ReviewMinAggregate = {
  __typename?: 'ReviewMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  star?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ReviewMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  star?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReviewOrderByWithAggregationInput = {
  _avg?: InputMaybe<ReviewAvgOrderByAggregateInput>;
  _count?: InputMaybe<ReviewCountOrderByAggregateInput>;
  _max?: InputMaybe<ReviewMaxOrderByAggregateInput>;
  _min?: InputMaybe<ReviewMinOrderByAggregateInput>;
  _sum?: InputMaybe<ReviewSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  star?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ReviewOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  star?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum ReviewScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Message = 'message',
  ProductId = 'productId',
  Star = 'star',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ReviewScalarWhereInput = {
  AND?: InputMaybe<Array<ReviewScalarWhereInput>>;
  NOT?: InputMaybe<Array<ReviewScalarWhereInput>>;
  OR?: InputMaybe<Array<ReviewScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  star?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ReviewScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ReviewScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ReviewScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ReviewScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  message?: InputMaybe<StringWithAggregatesFilter>;
  productId?: InputMaybe<StringWithAggregatesFilter>;
  star?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type ReviewSumAggregate = {
  __typename?: 'ReviewSumAggregate';
  star?: Maybe<Scalars['Int']['output']>;
};

export type ReviewSumOrderByAggregateInput = {
  star?: InputMaybe<SortOrder>;
};

export type ReviewUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutReveiwsNestedInput>;
  star?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutReveiwsNestedInput>;
};

export type ReviewUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  star?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReviewUpdateManyWithWhereWithoutProductInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithWhereWithoutUserInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutProductInput>>;
  createMany?: InputMaybe<ReviewCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<ReviewUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<ReviewUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<ReviewUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ReviewUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReviewCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<ReviewUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ReviewUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ReviewUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ReviewUpdateWithWhereUniqueWithoutProductInput = {
  data: ReviewUpdateWithoutProductInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
  data: ReviewUpdateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithoutProductInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  star?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutReveiwsNestedInput>;
};

export type ReviewUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutReveiwsNestedInput>;
  star?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReviewUpsertWithWhereUniqueWithoutProductInput = {
  create: ReviewCreateWithoutProductInput;
  update: ReviewUpdateWithoutProductInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
  create: ReviewCreateWithoutUserInput;
  update: ReviewUpdateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUserIdProductIdCompoundUniqueInput = {
  productId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type ReviewWhereInput = {
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  star?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  userId_productId?: InputMaybe<ReviewUserIdProductIdCompoundUniqueInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** New user data */
export type UpdateOneUserArgsCustom = {
  avater?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

/** New user data */
export type UpdateProfilePaswordArgs = {
  newPassword?: InputMaybe<Scalars['String']['input']>;
  oldPassword?: InputMaybe<Scalars['String']['input']>;
  updatePassword: Scalars['Boolean']['input'];
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  avater?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastname: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  reveiws: Array<Review>;
  role: UserRole;
  status: UserAccountStatus;
  updatedAt: Scalars['DateTime']['output'];
};


export type UserReveiwsArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};

export enum UserAccountStatus {
  Active = 'active',
  Banned = 'banned',
  PaymentMethodNeeded = 'payment_method_needed',
  VerifyEmail = 'verify_email'
}

export type UserCount = {
  __typename?: 'UserCount';
  reveiws: Scalars['Int']['output'];
};


export type UserCountReveiwsArgs = {
  where?: InputMaybe<ReviewWhereInput>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  avater: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  firstname: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lastname: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  phoneNumber: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  avater?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastname?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  avater?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role: UserRole;
  status?: InputMaybe<UserAccountStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateManyInput = {
  avater?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role: UserRole;
  status?: InputMaybe<UserAccountStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateNestedOneWithoutReveiwsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReveiwsInput>;
  create?: InputMaybe<UserCreateWithoutReveiwsInput>;
};

export type UserCreateOrConnectWithoutReveiwsInput = {
  create: UserCreateWithoutReveiwsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutReveiwsInput = {
  avater?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role: UserRole;
  status?: InputMaybe<UserAccountStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserForResponsce = {
  __typename?: 'UserForResponsce';
  avater?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  avater?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastname: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role: UserRole;
  status: UserAccountStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  avater?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UserRole>;
  status?: Maybe<UserAccountStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  avater?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastname?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  avater?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UserRole>;
  status?: Maybe<UserAccountStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMinOrderByAggregateInput = {
  avater?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastname?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  avater?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastname?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrderInput>;
  role?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  avater?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastname?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrderInput>;
  reveiws?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserRole {
  Admin = 'admin',
  Public = 'public',
  Superadmin = 'superadmin'
}

export enum UserScalarFieldEnum {
  Avater = 'avater',
  CreatedAt = 'createdAt',
  Email = 'email',
  Firstname = 'firstname',
  Id = 'id',
  Lastname = 'lastname',
  Password = 'password',
  PhoneNumber = 'phoneNumber',
  Role = 'role',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  avater?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  firstname?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  lastname?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  phoneNumber?: InputMaybe<StringNullableWithAggregatesFilter>;
  role?: InputMaybe<EnumUserRoleWithAggregatesFilter>;
  status?: InputMaybe<EnumUserAccountStatusWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserTokens = {
  __typename?: 'UserTokens';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type UserTokensCountAggregate = {
  __typename?: 'UserTokensCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserTokensCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserTokensCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type UserTokensCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type UserTokensGroupBy = {
  __typename?: 'UserTokensGroupBy';
  _count?: Maybe<UserTokensCountAggregate>;
  _max?: Maybe<UserTokensMaxAggregate>;
  _min?: Maybe<UserTokensMinAggregate>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type UserTokensMaxAggregate = {
  __typename?: 'UserTokensMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserTokensMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserTokensMinAggregate = {
  __typename?: 'UserTokensMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserTokensMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserTokensOrderByWithAggregationInput = {
  _count?: InputMaybe<UserTokensCountOrderByAggregateInput>;
  _max?: InputMaybe<UserTokensMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserTokensMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserTokensOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserTokensScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Token = 'token',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type UserTokensScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserTokensScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserTokensScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserTokensScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserTokensUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserTokensUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserTokensWhereInput = {
  AND?: InputMaybe<Array<UserTokensWhereInput>>;
  NOT?: InputMaybe<Array<UserTokensWhereInput>>;
  OR?: InputMaybe<Array<UserTokensWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserTokensWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateInput = {
  avater?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastname?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserAccountStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  avater?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastname?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserAccountStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutReveiwsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReveiwsInput>;
  create?: InputMaybe<UserCreateWithoutReveiwsInput>;
  update?: InputMaybe<UserUpdateWithoutReveiwsInput>;
  upsert?: InputMaybe<UserUpsertWithoutReveiwsInput>;
};

export type UserUpdateWithoutReveiwsInput = {
  avater?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastname?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserAccountStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutReveiwsInput = {
  create: UserCreateWithoutReveiwsInput;
  update: UserUpdateWithoutReveiwsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avater?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstname?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastname?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  reveiws?: InputMaybe<ReviewListRelationFilter>;
  role?: InputMaybe<EnumUserRoleFilter>;
  status?: InputMaybe<EnumUserAccountStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type DefaultResponsce = {
  __typename?: 'defaultResponsce';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type FileUploadResponsce = {
  __typename?: 'fileUploadResponsce';
  file?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CreateOneCategoryMutationVariables = Exact<{
  data: CategoryCreateInput;
}>;


export type CreateOneCategoryMutation = { __typename?: 'Mutation', createOneCategory: { __typename?: 'Category', id: string } };

export type UpdateOneCategoryMutationVariables = Exact<{
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
}>;


export type UpdateOneCategoryMutation = { __typename?: 'Mutation', updateOneCategory?: { __typename?: 'Category', id: string } | null };

export type DeleteOneCategoryMutationVariables = Exact<{
  where: CategoryWhereUniqueInput;
}>;


export type DeleteOneCategoryMutation = { __typename?: 'Mutation', deleteOneCategory?: { __typename?: 'Category', id: string } | null };

export type CategoryQueryVariables = Exact<{
  where: CategoryWhereUniqueInput;
}>;


export type CategoryQuery = { __typename?: 'Query', category?: { __typename?: 'Category', id: string, name: string, slug: string } | null };

export type CategoriesQueryVariables = Exact<{
  where?: InputMaybe<CategoryWhereInput>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput> | CategoryOrderByWithRelationInput>;
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum> | CategoryScalarFieldEnum>;
}>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string }> };

export type UploadFileMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type UploadFileMutation = { __typename?: 'Mutation', uploadFile?: { __typename?: 'fileUploadResponsce', message: string, success: boolean, file?: string | null } | null };

export type CreateOneProductMutationVariables = Exact<{
  data: ProductCreateInput;
}>;


export type CreateOneProductMutation = { __typename?: 'Mutation', createOneProduct: { __typename?: 'Product', id: string } };

export type AdminRegisterMutationVariables = Exact<{
  input: CreateOneUserArgsCustom;
}>;


export type AdminRegisterMutation = { __typename?: 'Mutation', adminRegister?: { __typename: 'defaultResponsce', message: string, success: boolean } | null };

export type MeAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type MeAdminQuery = { __typename?: 'Query', meAdmin?: { __typename?: 'UserForResponsce', avater?: string | null, email?: string | null, firstname?: string | null, id?: string | null, lastname?: string | null, role?: string | null, status: string, phoneNumber?: string | null } | null };

export type AdminLoginMutationVariables = Exact<{
  password: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type AdminLoginMutation = { __typename?: 'Mutation', adminLogin?: { __typename?: 'LoginResponsce', accessToken?: string | null, isAuthenticated: boolean, message: string, success: boolean, user?: { __typename?: 'UserForResponsce', id?: string | null } | null } | null };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken?: string | null };

export type UpdateProfileMutationVariables = Exact<{
  input: UpdateOneUserArgsCustom;
  passwordInput: UpdateProfilePaswordArgs;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile?: { __typename?: 'defaultResponsce', message: string, success: boolean } | null };


export const CreateOneCategoryDocument = gql`
    mutation CreateOneCategory($data: CategoryCreateInput!) {
  createOneCategory(data: $data) {
    id
  }
}
    `;
export type CreateOneCategoryMutationFn = Apollo.MutationFunction<CreateOneCategoryMutation, CreateOneCategoryMutationVariables>;

/**
 * __useCreateOneCategoryMutation__
 *
 * To run a mutation, you first call `useCreateOneCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneCategoryMutation, { data, loading, error }] = useCreateOneCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneCategoryMutation, CreateOneCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneCategoryMutation, CreateOneCategoryMutationVariables>(CreateOneCategoryDocument, options);
      }
export type CreateOneCategoryMutationHookResult = ReturnType<typeof useCreateOneCategoryMutation>;
export type CreateOneCategoryMutationResult = Apollo.MutationResult<CreateOneCategoryMutation>;
export type CreateOneCategoryMutationOptions = Apollo.BaseMutationOptions<CreateOneCategoryMutation, CreateOneCategoryMutationVariables>;
export const UpdateOneCategoryDocument = gql`
    mutation UpdateOneCategory($data: CategoryUpdateInput!, $where: CategoryWhereUniqueInput!) {
  updateOneCategory(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateOneCategoryMutationFn = Apollo.MutationFunction<UpdateOneCategoryMutation, UpdateOneCategoryMutationVariables>;

/**
 * __useUpdateOneCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateOneCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneCategoryMutation, { data, loading, error }] = useUpdateOneCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateOneCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneCategoryMutation, UpdateOneCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneCategoryMutation, UpdateOneCategoryMutationVariables>(UpdateOneCategoryDocument, options);
      }
export type UpdateOneCategoryMutationHookResult = ReturnType<typeof useUpdateOneCategoryMutation>;
export type UpdateOneCategoryMutationResult = Apollo.MutationResult<UpdateOneCategoryMutation>;
export type UpdateOneCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateOneCategoryMutation, UpdateOneCategoryMutationVariables>;
export const DeleteOneCategoryDocument = gql`
    mutation DeleteOneCategory($where: CategoryWhereUniqueInput!) {
  deleteOneCategory(where: $where) {
    id
  }
}
    `;
export type DeleteOneCategoryMutationFn = Apollo.MutationFunction<DeleteOneCategoryMutation, DeleteOneCategoryMutationVariables>;

/**
 * __useDeleteOneCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteOneCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneCategoryMutation, { data, loading, error }] = useDeleteOneCategoryMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneCategoryMutation, DeleteOneCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneCategoryMutation, DeleteOneCategoryMutationVariables>(DeleteOneCategoryDocument, options);
      }
export type DeleteOneCategoryMutationHookResult = ReturnType<typeof useDeleteOneCategoryMutation>;
export type DeleteOneCategoryMutationResult = Apollo.MutationResult<DeleteOneCategoryMutation>;
export type DeleteOneCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteOneCategoryMutation, DeleteOneCategoryMutationVariables>;
export const CategoryDocument = gql`
    query Category($where: CategoryWhereUniqueInput!) {
  category(where: $where) {
    id
    name
    slug
  }
}
    `;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables> & ({ variables: CategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export function useCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategorySuspenseQueryHookResult = ReturnType<typeof useCategorySuspenseQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const CategoriesDocument = gql`
    query Categories($where: CategoryWhereInput, $orderBy: [CategoryOrderByWithRelationInput!], $cursor: CategoryWhereUniqueInput, $take: Int, $skip: Int, $distinct: [CategoryScalarFieldEnum!]) {
  categories(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    id
    name
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export function useCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesSuspenseQueryHookResult = ReturnType<typeof useCategoriesSuspenseQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const UploadFileDocument = gql`
    mutation UploadFile($file: Upload!) {
  uploadFile(file: $file) {
    message
    success
    file
  }
}
    `;
export type UploadFileMutationFn = Apollo.MutationFunction<UploadFileMutation, UploadFileMutationVariables>;

/**
 * __useUploadFileMutation__
 *
 * To run a mutation, you first call `useUploadFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFileMutation, { data, loading, error }] = useUploadFileMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadFileMutation(baseOptions?: Apollo.MutationHookOptions<UploadFileMutation, UploadFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadFileMutation, UploadFileMutationVariables>(UploadFileDocument, options);
      }
export type UploadFileMutationHookResult = ReturnType<typeof useUploadFileMutation>;
export type UploadFileMutationResult = Apollo.MutationResult<UploadFileMutation>;
export type UploadFileMutationOptions = Apollo.BaseMutationOptions<UploadFileMutation, UploadFileMutationVariables>;
export const CreateOneProductDocument = gql`
    mutation CreateOneProduct($data: ProductCreateInput!) {
  createOneProduct(data: $data) {
    id
  }
}
    `;
export type CreateOneProductMutationFn = Apollo.MutationFunction<CreateOneProductMutation, CreateOneProductMutationVariables>;

/**
 * __useCreateOneProductMutation__
 *
 * To run a mutation, you first call `useCreateOneProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneProductMutation, { data, loading, error }] = useCreateOneProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneProductMutation, CreateOneProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneProductMutation, CreateOneProductMutationVariables>(CreateOneProductDocument, options);
      }
export type CreateOneProductMutationHookResult = ReturnType<typeof useCreateOneProductMutation>;
export type CreateOneProductMutationResult = Apollo.MutationResult<CreateOneProductMutation>;
export type CreateOneProductMutationOptions = Apollo.BaseMutationOptions<CreateOneProductMutation, CreateOneProductMutationVariables>;
export const AdminRegisterDocument = gql`
    mutation AdminRegister($input: CreateOneUserArgsCustom!) {
  adminRegister(input: $input) {
    __typename
    message
    success
  }
}
    `;
export type AdminRegisterMutationFn = Apollo.MutationFunction<AdminRegisterMutation, AdminRegisterMutationVariables>;

/**
 * __useAdminRegisterMutation__
 *
 * To run a mutation, you first call `useAdminRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminRegisterMutation, { data, loading, error }] = useAdminRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminRegisterMutation(baseOptions?: Apollo.MutationHookOptions<AdminRegisterMutation, AdminRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminRegisterMutation, AdminRegisterMutationVariables>(AdminRegisterDocument, options);
      }
export type AdminRegisterMutationHookResult = ReturnType<typeof useAdminRegisterMutation>;
export type AdminRegisterMutationResult = Apollo.MutationResult<AdminRegisterMutation>;
export type AdminRegisterMutationOptions = Apollo.BaseMutationOptions<AdminRegisterMutation, AdminRegisterMutationVariables>;
export const MeAdminDocument = gql`
    query MeAdmin {
  meAdmin {
    avater
    email
    firstname
    id
    lastname
    role
    status
    phoneNumber
  }
}
    `;

/**
 * __useMeAdminQuery__
 *
 * To run a query within a React component, call `useMeAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeAdminQuery(baseOptions?: Apollo.QueryHookOptions<MeAdminQuery, MeAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeAdminQuery, MeAdminQueryVariables>(MeAdminDocument, options);
      }
export function useMeAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeAdminQuery, MeAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeAdminQuery, MeAdminQueryVariables>(MeAdminDocument, options);
        }
export function useMeAdminSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeAdminQuery, MeAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeAdminQuery, MeAdminQueryVariables>(MeAdminDocument, options);
        }
export type MeAdminQueryHookResult = ReturnType<typeof useMeAdminQuery>;
export type MeAdminLazyQueryHookResult = ReturnType<typeof useMeAdminLazyQuery>;
export type MeAdminSuspenseQueryHookResult = ReturnType<typeof useMeAdminSuspenseQuery>;
export type MeAdminQueryResult = Apollo.QueryResult<MeAdminQuery, MeAdminQueryVariables>;
export const AdminLoginDocument = gql`
    mutation AdminLogin($password: String!, $email: String!) {
  adminLogin(password: $password, email: $email) {
    accessToken
    isAuthenticated
    message
    success
    user {
      id
    }
  }
}
    `;
export type AdminLoginMutationFn = Apollo.MutationFunction<AdminLoginMutation, AdminLoginMutationVariables>;

/**
 * __useAdminLoginMutation__
 *
 * To run a mutation, you first call `useAdminLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminLoginMutation, { data, loading, error }] = useAdminLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAdminLoginMutation(baseOptions?: Apollo.MutationHookOptions<AdminLoginMutation, AdminLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminLoginMutation, AdminLoginMutationVariables>(AdminLoginDocument, options);
      }
export type AdminLoginMutationHookResult = ReturnType<typeof useAdminLoginMutation>;
export type AdminLoginMutationResult = Apollo.MutationResult<AdminLoginMutation>;
export type AdminLoginMutationOptions = Apollo.BaseMutationOptions<AdminLoginMutation, AdminLoginMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken {
  refreshToken
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($input: UpdateOneUserArgsCustom!, $passwordInput: UpdateProfilePaswordArgs!) {
  updateProfile(input: $input, passwordInput: $passwordInput) {
    message
    success
  }
}
    `;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *      passwordInput: // value for 'passwordInput'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;