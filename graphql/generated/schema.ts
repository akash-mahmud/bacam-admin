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

export type AggregateCart = {
  __typename?: 'AggregateCart';
  _count?: Maybe<CartCountAggregate>;
  _max?: Maybe<CartMaxAggregate>;
  _min?: Maybe<CartMinAggregate>;
};

export type AggregateCartItem = {
  __typename?: 'AggregateCartItem';
  _avg?: Maybe<CartItemAvgAggregate>;
  _count?: Maybe<CartItemCountAggregate>;
  _max?: Maybe<CartItemMaxAggregate>;
  _min?: Maybe<CartItemMinAggregate>;
  _sum?: Maybe<CartItemSumAggregate>;
};

export type AggregateCategory = {
  __typename?: 'AggregateCategory';
  _count?: Maybe<CategoryCountAggregate>;
  _max?: Maybe<CategoryMaxAggregate>;
  _min?: Maybe<CategoryMinAggregate>;
};

export type AggregateDefaultShippingAdress = {
  __typename?: 'AggregateDefaultShippingAdress';
  _avg?: Maybe<DefaultShippingAdressAvgAggregate>;
  _count?: Maybe<DefaultShippingAdressCountAggregate>;
  _max?: Maybe<DefaultShippingAdressMaxAggregate>;
  _min?: Maybe<DefaultShippingAdressMinAggregate>;
  _sum?: Maybe<DefaultShippingAdressSumAggregate>;
};

export type AggregateEmployee = {
  __typename?: 'AggregateEmployee';
  _count?: Maybe<EmployeeCountAggregate>;
  _max?: Maybe<EmployeeMaxAggregate>;
  _min?: Maybe<EmployeeMinAggregate>;
};

export type AggregateEmployeeCategory = {
  __typename?: 'AggregateEmployeeCategory';
  _avg?: Maybe<EmployeeCategoryAvgAggregate>;
  _count?: Maybe<EmployeeCategoryCountAggregate>;
  _max?: Maybe<EmployeeCategoryMaxAggregate>;
  _min?: Maybe<EmployeeCategoryMinAggregate>;
  _sum?: Maybe<EmployeeCategorySumAggregate>;
};

export type AggregateEmployeeSubCategory = {
  __typename?: 'AggregateEmployeeSubCategory';
  _count?: Maybe<EmployeeSubCategoryCountAggregate>;
  _max?: Maybe<EmployeeSubCategoryMaxAggregate>;
  _min?: Maybe<EmployeeSubCategoryMinAggregate>;
};

export type AggregateFetaureCategory = {
  __typename?: 'AggregateFetaureCategory';
  _count?: Maybe<FetaureCategoryCountAggregate>;
  _max?: Maybe<FetaureCategoryMaxAggregate>;
  _min?: Maybe<FetaureCategoryMinAggregate>;
};

export type AggregateMainCategory = {
  __typename?: 'AggregateMainCategory';
  _count?: Maybe<MainCategoryCountAggregate>;
  _max?: Maybe<MainCategoryMaxAggregate>;
  _min?: Maybe<MainCategoryMinAggregate>;
};

export type AggregateOrder = {
  __typename?: 'AggregateOrder';
  _avg?: Maybe<OrderAvgAggregate>;
  _count?: Maybe<OrderCountAggregate>;
  _max?: Maybe<OrderMaxAggregate>;
  _min?: Maybe<OrderMinAggregate>;
  _sum?: Maybe<OrderSumAggregate>;
};

export type AggregateOrderItem = {
  __typename?: 'AggregateOrderItem';
  _avg?: Maybe<OrderItemAvgAggregate>;
  _count?: Maybe<OrderItemCountAggregate>;
  _max?: Maybe<OrderItemMaxAggregate>;
  _min?: Maybe<OrderItemMinAggregate>;
  _sum?: Maybe<OrderItemSumAggregate>;
};

export type AggregatePaymentResult = {
  __typename?: 'AggregatePaymentResult';
  _count?: Maybe<PaymentResultCountAggregate>;
  _max?: Maybe<PaymentResultMaxAggregate>;
  _min?: Maybe<PaymentResultMinAggregate>;
};

export type AggregateProduct = {
  __typename?: 'AggregateProduct';
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
};

export type AggregateProductFetaure = {
  __typename?: 'AggregateProductFetaure';
  _count?: Maybe<ProductFetaureCountAggregate>;
  _max?: Maybe<ProductFetaureMaxAggregate>;
  _min?: Maybe<ProductFetaureMinAggregate>;
};

export type AggregateReview = {
  __typename?: 'AggregateReview';
  _avg?: Maybe<ReviewAvgAggregate>;
  _count?: Maybe<ReviewCountAggregate>;
  _max?: Maybe<ReviewMaxAggregate>;
  _min?: Maybe<ReviewMinAggregate>;
  _sum?: Maybe<ReviewSumAggregate>;
};

export type AggregateShippingAddress = {
  __typename?: 'AggregateShippingAddress';
  _avg?: Maybe<ShippingAddressAvgAggregate>;
  _count?: Maybe<ShippingAddressCountAggregate>;
  _max?: Maybe<ShippingAddressMaxAggregate>;
  _min?: Maybe<ShippingAddressMinAggregate>;
  _sum?: Maybe<ShippingAddressSumAggregate>;
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

export type Cart = {
  __typename?: 'Cart';
  _count?: Maybe<CartCount>;
  cartItem: Array<CartItem>;
  id: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};


export type CartCartItemArgs = {
  cursor?: InputMaybe<CartItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<CartItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CartItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CartItemWhereInput>;
};

export type CartCount = {
  __typename?: 'CartCount';
  cartItem: Scalars['Int']['output'];
};


export type CartCountCartItemArgs = {
  where?: InputMaybe<CartItemWhereInput>;
};

export type CartCountAggregate = {
  __typename?: 'CartCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type CartCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CartCreateInput = {
  cartItem?: InputMaybe<CartItemCreateNestedManyWithoutCartInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutCartInput;
};

export type CartCreateManyInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type CartCreateNestedOneWithoutCartItemInput = {
  connect?: InputMaybe<CartWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CartCreateOrConnectWithoutCartItemInput>;
  create?: InputMaybe<CartCreateWithoutCartItemInput>;
};

export type CartCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<CartWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CartCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<CartCreateWithoutUserInput>;
};

export type CartCreateOrConnectWithoutCartItemInput = {
  create: CartCreateWithoutCartItemInput;
  where: CartWhereUniqueInput;
};

export type CartCreateOrConnectWithoutUserInput = {
  create: CartCreateWithoutUserInput;
  where: CartWhereUniqueInput;
};

export type CartCreateWithoutCartItemInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutCartInput;
};

export type CartCreateWithoutUserInput = {
  cartItem?: InputMaybe<CartItemCreateNestedManyWithoutCartInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CartGroupBy = {
  __typename?: 'CartGroupBy';
  _count?: Maybe<CartCountAggregate>;
  _max?: Maybe<CartMaxAggregate>;
  _min?: Maybe<CartMinAggregate>;
  id: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type CartItem = {
  __typename?: 'CartItem';
  cart: Cart;
  cartId: Scalars['String']['output'];
  employee?: Maybe<Employee>;
  employeeId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  product: Product;
  productId: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
};

export type CartItemAvgAggregate = {
  __typename?: 'CartItemAvgAggregate';
  quantity?: Maybe<Scalars['Float']['output']>;
};

export type CartItemAvgOrderByAggregateInput = {
  quantity?: InputMaybe<SortOrder>;
};

export type CartItemCountAggregate = {
  __typename?: 'CartItemCountAggregate';
  _all: Scalars['Int']['output'];
  cartId: Scalars['Int']['output'];
  employeeId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  productId: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
};

export type CartItemCountOrderByAggregateInput = {
  cartId?: InputMaybe<SortOrder>;
  employeeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
};

export type CartItemCreateInput = {
  cart: CartCreateNestedOneWithoutCartItemInput;
  employee?: InputMaybe<EmployeeCreateNestedOneWithoutCartItemInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  product: ProductCreateNestedOneWithoutCartItemInput;
  quantity: Scalars['Int']['input'];
};

export type CartItemCreateManyCartInput = {
  employeeId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type CartItemCreateManyCartInputEnvelope = {
  data: Array<CartItemCreateManyCartInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CartItemCreateManyEmployeeInput = {
  cartId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type CartItemCreateManyEmployeeInputEnvelope = {
  data: Array<CartItemCreateManyEmployeeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CartItemCreateManyInput = {
  cartId: Scalars['String']['input'];
  employeeId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type CartItemCreateManyProductInput = {
  cartId: Scalars['String']['input'];
  employeeId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
};

export type CartItemCreateManyProductInputEnvelope = {
  data: Array<CartItemCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CartItemCreateNestedManyWithoutCartInput = {
  connect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CartItemCreateOrConnectWithoutCartInput>>;
  create?: InputMaybe<Array<CartItemCreateWithoutCartInput>>;
  createMany?: InputMaybe<CartItemCreateManyCartInputEnvelope>;
};

export type CartItemCreateNestedManyWithoutEmployeeInput = {
  connect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CartItemCreateOrConnectWithoutEmployeeInput>>;
  create?: InputMaybe<Array<CartItemCreateWithoutEmployeeInput>>;
  createMany?: InputMaybe<CartItemCreateManyEmployeeInputEnvelope>;
};

export type CartItemCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CartItemCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<CartItemCreateWithoutProductInput>>;
  createMany?: InputMaybe<CartItemCreateManyProductInputEnvelope>;
};

export type CartItemCreateOrConnectWithoutCartInput = {
  create: CartItemCreateWithoutCartInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemCreateOrConnectWithoutEmployeeInput = {
  create: CartItemCreateWithoutEmployeeInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemCreateOrConnectWithoutProductInput = {
  create: CartItemCreateWithoutProductInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemCreateWithoutCartInput = {
  employee?: InputMaybe<EmployeeCreateNestedOneWithoutCartItemInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  product: ProductCreateNestedOneWithoutCartItemInput;
  quantity: Scalars['Int']['input'];
};

export type CartItemCreateWithoutEmployeeInput = {
  cart: CartCreateNestedOneWithoutCartItemInput;
  id?: InputMaybe<Scalars['String']['input']>;
  product: ProductCreateNestedOneWithoutCartItemInput;
  quantity: Scalars['Int']['input'];
};

export type CartItemCreateWithoutProductInput = {
  cart: CartCreateNestedOneWithoutCartItemInput;
  employee?: InputMaybe<EmployeeCreateNestedOneWithoutCartItemInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
};

export type CartItemGroupBy = {
  __typename?: 'CartItemGroupBy';
  _avg?: Maybe<CartItemAvgAggregate>;
  _count?: Maybe<CartItemCountAggregate>;
  _max?: Maybe<CartItemMaxAggregate>;
  _min?: Maybe<CartItemMinAggregate>;
  _sum?: Maybe<CartItemSumAggregate>;
  cartId: Scalars['String']['output'];
  employeeId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
};

export type CartItemListRelationFilter = {
  every?: InputMaybe<CartItemWhereInput>;
  none?: InputMaybe<CartItemWhereInput>;
  some?: InputMaybe<CartItemWhereInput>;
};

export type CartItemMaxAggregate = {
  __typename?: 'CartItemMaxAggregate';
  cartId?: Maybe<Scalars['String']['output']>;
  employeeId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type CartItemMaxOrderByAggregateInput = {
  cartId?: InputMaybe<SortOrder>;
  employeeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
};

export type CartItemMinAggregate = {
  __typename?: 'CartItemMinAggregate';
  cartId?: Maybe<Scalars['String']['output']>;
  employeeId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type CartItemMinOrderByAggregateInput = {
  cartId?: InputMaybe<SortOrder>;
  employeeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
};

export type CartItemOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CartItemOrderByWithAggregationInput = {
  _avg?: InputMaybe<CartItemAvgOrderByAggregateInput>;
  _count?: InputMaybe<CartItemCountOrderByAggregateInput>;
  _max?: InputMaybe<CartItemMaxOrderByAggregateInput>;
  _min?: InputMaybe<CartItemMinOrderByAggregateInput>;
  _sum?: InputMaybe<CartItemSumOrderByAggregateInput>;
  cartId?: InputMaybe<SortOrder>;
  employeeId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
};

export type CartItemOrderByWithRelationInput = {
  cart?: InputMaybe<CartOrderByWithRelationInput>;
  cartId?: InputMaybe<SortOrder>;
  employee?: InputMaybe<EmployeeOrderByWithRelationInput>;
  employeeId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
};

export enum CartItemScalarFieldEnum {
  CartId = 'cartId',
  EmployeeId = 'employeeId',
  Id = 'id',
  ProductId = 'productId',
  Quantity = 'quantity'
}

export type CartItemScalarWhereInput = {
  AND?: InputMaybe<Array<CartItemScalarWhereInput>>;
  NOT?: InputMaybe<Array<CartItemScalarWhereInput>>;
  OR?: InputMaybe<Array<CartItemScalarWhereInput>>;
  cartId?: InputMaybe<StringFilter>;
  employeeId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
};

export type CartItemScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CartItemScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CartItemScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CartItemScalarWhereWithAggregatesInput>>;
  cartId?: InputMaybe<StringWithAggregatesFilter>;
  employeeId?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  productId?: InputMaybe<StringWithAggregatesFilter>;
  quantity?: InputMaybe<IntWithAggregatesFilter>;
};

export type CartItemSumAggregate = {
  __typename?: 'CartItemSumAggregate';
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type CartItemSumOrderByAggregateInput = {
  quantity?: InputMaybe<SortOrder>;
};

export type CartItemUpdateInput = {
  cart?: InputMaybe<CartUpdateOneRequiredWithoutCartItemNestedInput>;
  employee?: InputMaybe<EmployeeUpdateOneWithoutCartItemNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutCartItemNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CartItemUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CartItemUpdateManyWithWhereWithoutCartInput = {
  data: CartItemUpdateManyMutationInput;
  where: CartItemScalarWhereInput;
};

export type CartItemUpdateManyWithWhereWithoutEmployeeInput = {
  data: CartItemUpdateManyMutationInput;
  where: CartItemScalarWhereInput;
};

export type CartItemUpdateManyWithWhereWithoutProductInput = {
  data: CartItemUpdateManyMutationInput;
  where: CartItemScalarWhereInput;
};

export type CartItemUpdateManyWithoutCartNestedInput = {
  connect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CartItemCreateOrConnectWithoutCartInput>>;
  create?: InputMaybe<Array<CartItemCreateWithoutCartInput>>;
  createMany?: InputMaybe<CartItemCreateManyCartInputEnvelope>;
  delete?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CartItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  set?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  update?: InputMaybe<Array<CartItemUpdateWithWhereUniqueWithoutCartInput>>;
  updateMany?: InputMaybe<Array<CartItemUpdateManyWithWhereWithoutCartInput>>;
  upsert?: InputMaybe<Array<CartItemUpsertWithWhereUniqueWithoutCartInput>>;
};

export type CartItemUpdateManyWithoutEmployeeNestedInput = {
  connect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CartItemCreateOrConnectWithoutEmployeeInput>>;
  create?: InputMaybe<Array<CartItemCreateWithoutEmployeeInput>>;
  createMany?: InputMaybe<CartItemCreateManyEmployeeInputEnvelope>;
  delete?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CartItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  set?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  update?: InputMaybe<Array<CartItemUpdateWithWhereUniqueWithoutEmployeeInput>>;
  updateMany?: InputMaybe<Array<CartItemUpdateManyWithWhereWithoutEmployeeInput>>;
  upsert?: InputMaybe<Array<CartItemUpsertWithWhereUniqueWithoutEmployeeInput>>;
};

export type CartItemUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CartItemCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<CartItemCreateWithoutProductInput>>;
  createMany?: InputMaybe<CartItemCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CartItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  set?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  update?: InputMaybe<Array<CartItemUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<CartItemUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<CartItemUpsertWithWhereUniqueWithoutProductInput>>;
};

export type CartItemUpdateWithWhereUniqueWithoutCartInput = {
  data: CartItemUpdateWithoutCartInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemUpdateWithWhereUniqueWithoutEmployeeInput = {
  data: CartItemUpdateWithoutEmployeeInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemUpdateWithWhereUniqueWithoutProductInput = {
  data: CartItemUpdateWithoutProductInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemUpdateWithoutCartInput = {
  employee?: InputMaybe<EmployeeUpdateOneWithoutCartItemNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutCartItemNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CartItemUpdateWithoutEmployeeInput = {
  cart?: InputMaybe<CartUpdateOneRequiredWithoutCartItemNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutCartItemNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CartItemUpdateWithoutProductInput = {
  cart?: InputMaybe<CartUpdateOneRequiredWithoutCartItemNestedInput>;
  employee?: InputMaybe<EmployeeUpdateOneWithoutCartItemNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CartItemUpsertWithWhereUniqueWithoutCartInput = {
  create: CartItemCreateWithoutCartInput;
  update: CartItemUpdateWithoutCartInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemUpsertWithWhereUniqueWithoutEmployeeInput = {
  create: CartItemCreateWithoutEmployeeInput;
  update: CartItemUpdateWithoutEmployeeInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemUpsertWithWhereUniqueWithoutProductInput = {
  create: CartItemCreateWithoutProductInput;
  update: CartItemUpdateWithoutProductInput;
  where: CartItemWhereUniqueInput;
};

export type CartItemWhereInput = {
  AND?: InputMaybe<Array<CartItemWhereInput>>;
  NOT?: InputMaybe<Array<CartItemWhereInput>>;
  OR?: InputMaybe<Array<CartItemWhereInput>>;
  cart?: InputMaybe<CartRelationFilter>;
  cartId?: InputMaybe<StringFilter>;
  employee?: InputMaybe<EmployeeRelationFilter>;
  employeeId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
};

export type CartItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CartMaxAggregate = {
  __typename?: 'CartMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type CartMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CartMinAggregate = {
  __typename?: 'CartMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type CartMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CartOrderByWithAggregationInput = {
  _count?: InputMaybe<CartCountOrderByAggregateInput>;
  _max?: InputMaybe<CartMaxOrderByAggregateInput>;
  _min?: InputMaybe<CartMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CartOrderByWithRelationInput = {
  cartItem?: InputMaybe<CartItemOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type CartRelationFilter = {
  is?: InputMaybe<CartWhereInput>;
  isNot?: InputMaybe<CartWhereInput>;
};

export enum CartScalarFieldEnum {
  Id = 'id',
  UserId = 'userId'
}

export type CartScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CartScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CartScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CartScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type CartUpdateInput = {
  cartItem?: InputMaybe<CartItemUpdateManyWithoutCartNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCartNestedInput>;
};

export type CartUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CartUpdateOneRequiredWithoutCartItemNestedInput = {
  connect?: InputMaybe<CartWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CartCreateOrConnectWithoutCartItemInput>;
  create?: InputMaybe<CartCreateWithoutCartItemInput>;
  update?: InputMaybe<CartUpdateWithoutCartItemInput>;
  upsert?: InputMaybe<CartUpsertWithoutCartItemInput>;
};

export type CartUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<CartWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CartCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<CartCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<CartUpdateWithoutUserInput>;
  upsert?: InputMaybe<CartUpsertWithoutUserInput>;
};

export type CartUpdateWithoutCartItemInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCartNestedInput>;
};

export type CartUpdateWithoutUserInput = {
  cartItem?: InputMaybe<CartItemUpdateManyWithoutCartNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CartUpsertWithoutCartItemInput = {
  create: CartCreateWithoutCartItemInput;
  update: CartUpdateWithoutCartItemInput;
};

export type CartUpsertWithoutUserInput = {
  create: CartCreateWithoutUserInput;
  update: CartUpdateWithoutUserInput;
};

export type CartWhereInput = {
  AND?: InputMaybe<Array<CartWhereInput>>;
  NOT?: InputMaybe<Array<CartWhereInput>>;
  OR?: InputMaybe<Array<CartWhereInput>>;
  cartItem?: InputMaybe<CartItemListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CartWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type Category = {
  __typename?: 'Category';
  _count?: Maybe<CategoryCount>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  mainCategory?: Maybe<MainCategory>;
  mainCategoryId?: Maybe<Scalars['String']['output']>;
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
  mainCategoryId: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  slug: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type CategoryCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mainCategoryId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mainCategory?: InputMaybe<MainCategoryCreateNestedOneWithoutCategoriesInput>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutCategoryInput>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mainCategoryId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryCreateManyMainCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryCreateManyMainCategoryInputEnvelope = {
  data: Array<CategoryCreateManyMainCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryCreateNestedManyWithoutMainCategoryInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutMainCategoryInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutMainCategoryInput>>;
  createMany?: InputMaybe<CategoryCreateManyMainCategoryInputEnvelope>;
};

export type CategoryCreateNestedOneWithoutProductsInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<CategoryCreateWithoutProductsInput>;
};

export type CategoryCreateOrConnectWithoutMainCategoryInput = {
  create: CategoryCreateWithoutMainCategoryInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutProductsInput = {
  create: CategoryCreateWithoutProductsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutMainCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutCategoryInput>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryCreateWithoutProductsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mainCategory?: InputMaybe<MainCategoryCreateNestedOneWithoutCategoriesInput>;
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
  mainCategoryId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CategoryListRelationFilter = {
  every?: InputMaybe<CategoryWhereInput>;
  none?: InputMaybe<CategoryWhereInput>;
  some?: InputMaybe<CategoryWhereInput>;
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mainCategoryId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mainCategoryId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mainCategoryId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mainCategoryId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<CategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<CategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<CategoryMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mainCategoryId?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mainCategory?: InputMaybe<MainCategoryOrderByWithRelationInput>;
  mainCategoryId?: InputMaybe<SortOrderInput>;
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
  MainCategoryId = 'mainCategoryId',
  Name = 'name',
  Slug = 'slug',
  UpdatedAt = 'updatedAt'
}

export type CategoryScalarWhereInput = {
  AND?: InputMaybe<Array<CategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<CategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<CategoryScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  mainCategoryId?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  mainCategoryId?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type CategoryUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mainCategory?: InputMaybe<MainCategoryUpdateOneWithoutCategoriesNestedInput>;
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

export type CategoryUpdateManyWithWhereWithoutMainCategoryInput = {
  data: CategoryUpdateManyMutationInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithoutMainCategoryNestedInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutMainCategoryInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutMainCategoryInput>>;
  createMany?: InputMaybe<CategoryCreateManyMainCategoryInputEnvelope>;
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryUpdateWithWhereUniqueWithoutMainCategoryInput>>;
  updateMany?: InputMaybe<Array<CategoryUpdateManyWithWhereWithoutMainCategoryInput>>;
  upsert?: InputMaybe<Array<CategoryUpsertWithWhereUniqueWithoutMainCategoryInput>>;
};

export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<CategoryCreateWithoutProductsInput>;
  update?: InputMaybe<CategoryUpdateWithoutProductsInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutProductsInput>;
};

export type CategoryUpdateWithWhereUniqueWithoutMainCategoryInput = {
  data: CategoryUpdateWithoutMainCategoryInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithoutMainCategoryInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutCategoryNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutProductsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  mainCategory?: InputMaybe<MainCategoryUpdateOneWithoutCategoriesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithWhereUniqueWithoutMainCategoryInput = {
  create: CategoryCreateWithoutMainCategoryInput;
  update: CategoryUpdateWithoutMainCategoryInput;
  where: CategoryWhereUniqueInput;
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
  mainCategory?: InputMaybe<MainCategoryRelationFilter>;
  mainCategoryId?: InputMaybe<StringNullableFilter>;
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

export enum CustomProductStatus {
  MinimumOrderNeeded = 'minimum_order_needed',
  Started = 'started'
}

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

export type DefaultShippingAdress = {
  __typename?: 'DefaultShippingAdress';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
  postalCode: Scalars['String']['output'];
  shippingPrice: Scalars['Float']['output'];
  taxPrice: Scalars['Float']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type DefaultShippingAdressAvgAggregate = {
  __typename?: 'DefaultShippingAdressAvgAggregate';
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  shippingPrice?: Maybe<Scalars['Float']['output']>;
  taxPrice?: Maybe<Scalars['Float']['output']>;
};

export type DefaultShippingAdressAvgOrderByAggregateInput = {
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  shippingPrice?: InputMaybe<SortOrder>;
  taxPrice?: InputMaybe<SortOrder>;
};

export type DefaultShippingAdressCountAggregate = {
  __typename?: 'DefaultShippingAdressCountAggregate';
  _all: Scalars['Int']['output'];
  address: Scalars['Int']['output'];
  city: Scalars['Int']['output'];
  country: Scalars['Int']['output'];
  fullName: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lat: Scalars['Int']['output'];
  lng: Scalars['Int']['output'];
  postalCode: Scalars['Int']['output'];
  shippingPrice: Scalars['Int']['output'];
  taxPrice: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type DefaultShippingAdressCountOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  postalCode?: InputMaybe<SortOrder>;
  shippingPrice?: InputMaybe<SortOrder>;
  taxPrice?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type DefaultShippingAdressCreateInput = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
  postalCode: Scalars['String']['input'];
  shippingPrice?: InputMaybe<Scalars['Float']['input']>;
  taxPrice?: InputMaybe<Scalars['Float']['input']>;
  user: UserCreateNestedOneWithoutDefaultShippingAdressInput;
};

export type DefaultShippingAdressCreateManyInput = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
  postalCode: Scalars['String']['input'];
  shippingPrice?: InputMaybe<Scalars['Float']['input']>;
  taxPrice?: InputMaybe<Scalars['Float']['input']>;
  userId: Scalars['String']['input'];
};

export type DefaultShippingAdressCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<DefaultShippingAdressWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DefaultShippingAdressCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<DefaultShippingAdressCreateWithoutUserInput>;
};

export type DefaultShippingAdressCreateOrConnectWithoutUserInput = {
  create: DefaultShippingAdressCreateWithoutUserInput;
  where: DefaultShippingAdressWhereUniqueInput;
};

export type DefaultShippingAdressCreateWithoutUserInput = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
  postalCode: Scalars['String']['input'];
  shippingPrice?: InputMaybe<Scalars['Float']['input']>;
  taxPrice?: InputMaybe<Scalars['Float']['input']>;
};

export type DefaultShippingAdressGroupBy = {
  __typename?: 'DefaultShippingAdressGroupBy';
  _avg?: Maybe<DefaultShippingAdressAvgAggregate>;
  _count?: Maybe<DefaultShippingAdressCountAggregate>;
  _max?: Maybe<DefaultShippingAdressMaxAggregate>;
  _min?: Maybe<DefaultShippingAdressMinAggregate>;
  _sum?: Maybe<DefaultShippingAdressSumAggregate>;
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
  postalCode: Scalars['String']['output'];
  shippingPrice: Scalars['Float']['output'];
  taxPrice: Scalars['Float']['output'];
  userId: Scalars['String']['output'];
};

export type DefaultShippingAdressMaxAggregate = {
  __typename?: 'DefaultShippingAdressMaxAggregate';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  shippingPrice?: Maybe<Scalars['Float']['output']>;
  taxPrice?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type DefaultShippingAdressMaxOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  postalCode?: InputMaybe<SortOrder>;
  shippingPrice?: InputMaybe<SortOrder>;
  taxPrice?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type DefaultShippingAdressMinAggregate = {
  __typename?: 'DefaultShippingAdressMinAggregate';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  shippingPrice?: Maybe<Scalars['Float']['output']>;
  taxPrice?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type DefaultShippingAdressMinOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  postalCode?: InputMaybe<SortOrder>;
  shippingPrice?: InputMaybe<SortOrder>;
  taxPrice?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type DefaultShippingAdressOrderByWithAggregationInput = {
  _avg?: InputMaybe<DefaultShippingAdressAvgOrderByAggregateInput>;
  _count?: InputMaybe<DefaultShippingAdressCountOrderByAggregateInput>;
  _max?: InputMaybe<DefaultShippingAdressMaxOrderByAggregateInput>;
  _min?: InputMaybe<DefaultShippingAdressMinOrderByAggregateInput>;
  _sum?: InputMaybe<DefaultShippingAdressSumOrderByAggregateInput>;
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  postalCode?: InputMaybe<SortOrder>;
  shippingPrice?: InputMaybe<SortOrder>;
  taxPrice?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type DefaultShippingAdressOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  postalCode?: InputMaybe<SortOrder>;
  shippingPrice?: InputMaybe<SortOrder>;
  taxPrice?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type DefaultShippingAdressRelationFilter = {
  is?: InputMaybe<DefaultShippingAdressWhereInput>;
  isNot?: InputMaybe<DefaultShippingAdressWhereInput>;
};

export enum DefaultShippingAdressScalarFieldEnum {
  Address = 'address',
  City = 'city',
  Country = 'country',
  FullName = 'fullName',
  Id = 'id',
  Lat = 'lat',
  Lng = 'lng',
  PostalCode = 'postalCode',
  ShippingPrice = 'shippingPrice',
  TaxPrice = 'taxPrice',
  UserId = 'userId'
}

export type DefaultShippingAdressScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<DefaultShippingAdressScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<DefaultShippingAdressScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<DefaultShippingAdressScalarWhereWithAggregatesInput>>;
  address?: InputMaybe<StringWithAggregatesFilter>;
  city?: InputMaybe<StringWithAggregatesFilter>;
  country?: InputMaybe<StringWithAggregatesFilter>;
  fullName?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  lat?: InputMaybe<FloatWithAggregatesFilter>;
  lng?: InputMaybe<FloatWithAggregatesFilter>;
  postalCode?: InputMaybe<StringWithAggregatesFilter>;
  shippingPrice?: InputMaybe<FloatWithAggregatesFilter>;
  taxPrice?: InputMaybe<FloatWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type DefaultShippingAdressSumAggregate = {
  __typename?: 'DefaultShippingAdressSumAggregate';
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  shippingPrice?: Maybe<Scalars['Float']['output']>;
  taxPrice?: Maybe<Scalars['Float']['output']>;
};

export type DefaultShippingAdressSumOrderByAggregateInput = {
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  shippingPrice?: InputMaybe<SortOrder>;
  taxPrice?: InputMaybe<SortOrder>;
};

export type DefaultShippingAdressUpdateInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lat?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lng?: InputMaybe<FloatFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  shippingPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  taxPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutDefaultShippingAdressNestedInput>;
};

export type DefaultShippingAdressUpdateManyMutationInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lat?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lng?: InputMaybe<FloatFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  shippingPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  taxPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type DefaultShippingAdressUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<DefaultShippingAdressWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DefaultShippingAdressCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<DefaultShippingAdressCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<DefaultShippingAdressUpdateWithoutUserInput>;
  upsert?: InputMaybe<DefaultShippingAdressUpsertWithoutUserInput>;
};

export type DefaultShippingAdressUpdateWithoutUserInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lat?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lng?: InputMaybe<FloatFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  shippingPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  taxPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type DefaultShippingAdressUpsertWithoutUserInput = {
  create: DefaultShippingAdressCreateWithoutUserInput;
  update: DefaultShippingAdressUpdateWithoutUserInput;
};

export type DefaultShippingAdressWhereInput = {
  AND?: InputMaybe<Array<DefaultShippingAdressWhereInput>>;
  NOT?: InputMaybe<Array<DefaultShippingAdressWhereInput>>;
  OR?: InputMaybe<Array<DefaultShippingAdressWhereInput>>;
  address?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  fullName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
  postalCode?: InputMaybe<StringFilter>;
  shippingPrice?: InputMaybe<FloatFilter>;
  taxPrice?: InputMaybe<FloatFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type DefaultShippingAdressWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type Employee = {
  __typename?: 'Employee';
  _count?: Maybe<EmployeeCount>;
  cartItem: Array<CartItem>;
  createdAt: Scalars['DateTime']['output'];
  employeeCategory?: Maybe<EmployeeCategory>;
  employeeCategoryId?: Maybe<Scalars['String']['output']>;
  employeeSubCategory?: Maybe<EmployeeSubCategory>;
  employeeSubCategoryId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  orderItem: Array<OrderItem>;
  products: Array<Product>;
  shortDescription: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type EmployeeCartItemArgs = {
  cursor?: InputMaybe<CartItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<CartItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CartItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CartItemWhereInput>;
};


export type EmployeeOrderItemArgs = {
  cursor?: InputMaybe<OrderItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderItemWhereInput>;
};


export type EmployeeProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type EmployeeCategory = {
  __typename?: 'EmployeeCategory';
  _count?: Maybe<EmployeeCategoryCount>;
  createdAt: Scalars['DateTime']['output'];
  employee: Array<Employee>;
  employeeSubCategory: Array<EmployeeSubCategory>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type EmployeeCategoryEmployeeArgs = {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeWhereInput>;
};


export type EmployeeCategoryEmployeeSubCategoryArgs = {
  cursor?: InputMaybe<EmployeeSubCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeSubCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeSubCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeSubCategoryWhereInput>;
};

export type EmployeeCategoryAvgAggregate = {
  __typename?: 'EmployeeCategoryAvgAggregate';
  position?: Maybe<Scalars['Float']['output']>;
};

export type EmployeeCategoryAvgOrderByAggregateInput = {
  position?: InputMaybe<SortOrder>;
};

export type EmployeeCategoryCount = {
  __typename?: 'EmployeeCategoryCount';
  employee: Scalars['Int']['output'];
  employeeSubCategory: Scalars['Int']['output'];
};


export type EmployeeCategoryCountEmployeeArgs = {
  where?: InputMaybe<EmployeeWhereInput>;
};


export type EmployeeCategoryCountEmployeeSubCategoryArgs = {
  where?: InputMaybe<EmployeeSubCategoryWhereInput>;
};

export type EmployeeCategoryCountAggregate = {
  __typename?: 'EmployeeCategoryCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  position: Scalars['Int']['output'];
  slug: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type EmployeeCategoryCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EmployeeCategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  employee?: InputMaybe<EmployeeCreateNestedManyWithoutEmployeeCategoryInput>;
  employeeSubCategory?: InputMaybe<EmployeeSubCategoryCreateNestedManyWithoutEmployeeCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeCategoryCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeCategoryCreateNestedOneWithoutEmployeeInput = {
  connect?: InputMaybe<EmployeeCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeeCategoryCreateOrConnectWithoutEmployeeInput>;
  create?: InputMaybe<EmployeeCategoryCreateWithoutEmployeeInput>;
};

export type EmployeeCategoryCreateNestedOneWithoutEmployeeSubCategoryInput = {
  connect?: InputMaybe<EmployeeCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeeCategoryCreateOrConnectWithoutEmployeeSubCategoryInput>;
  create?: InputMaybe<EmployeeCategoryCreateWithoutEmployeeSubCategoryInput>;
};

export type EmployeeCategoryCreateOrConnectWithoutEmployeeInput = {
  create: EmployeeCategoryCreateWithoutEmployeeInput;
  where: EmployeeCategoryWhereUniqueInput;
};

export type EmployeeCategoryCreateOrConnectWithoutEmployeeSubCategoryInput = {
  create: EmployeeCategoryCreateWithoutEmployeeSubCategoryInput;
  where: EmployeeCategoryWhereUniqueInput;
};

export type EmployeeCategoryCreateWithoutEmployeeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  employeeSubCategory?: InputMaybe<EmployeeSubCategoryCreateNestedManyWithoutEmployeeCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeCategoryCreateWithoutEmployeeSubCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  employee?: InputMaybe<EmployeeCreateNestedManyWithoutEmployeeCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeCategoryGroupBy = {
  __typename?: 'EmployeeCategoryGroupBy';
  _avg?: Maybe<EmployeeCategoryAvgAggregate>;
  _count?: Maybe<EmployeeCategoryCountAggregate>;
  _max?: Maybe<EmployeeCategoryMaxAggregate>;
  _min?: Maybe<EmployeeCategoryMinAggregate>;
  _sum?: Maybe<EmployeeCategorySumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type EmployeeCategoryMaxAggregate = {
  __typename?: 'EmployeeCategoryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EmployeeCategoryMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EmployeeCategoryMinAggregate = {
  __typename?: 'EmployeeCategoryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EmployeeCategoryMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EmployeeCategoryOrderByWithAggregationInput = {
  _avg?: InputMaybe<EmployeeCategoryAvgOrderByAggregateInput>;
  _count?: InputMaybe<EmployeeCategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<EmployeeCategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<EmployeeCategoryMinOrderByAggregateInput>;
  _sum?: InputMaybe<EmployeeCategorySumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EmployeeCategoryOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  employee?: InputMaybe<EmployeeOrderByRelationAggregateInput>;
  employeeSubCategory?: InputMaybe<EmployeeSubCategoryOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EmployeeCategoryRelationFilter = {
  is?: InputMaybe<EmployeeCategoryWhereInput>;
  isNot?: InputMaybe<EmployeeCategoryWhereInput>;
};

export enum EmployeeCategoryScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Position = 'position',
  Slug = 'slug',
  UpdatedAt = 'updatedAt'
}

export type EmployeeCategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<EmployeeCategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<EmployeeCategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<EmployeeCategoryScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  position?: InputMaybe<IntWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type EmployeeCategorySumAggregate = {
  __typename?: 'EmployeeCategorySumAggregate';
  position?: Maybe<Scalars['Int']['output']>;
};

export type EmployeeCategorySumOrderByAggregateInput = {
  position?: InputMaybe<SortOrder>;
};

export type EmployeeCategoryUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateManyWithoutEmployeeCategoryNestedInput>;
  employeeSubCategory?: InputMaybe<EmployeeSubCategoryUpdateManyWithoutEmployeeCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  position?: InputMaybe<IntFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeCategoryUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  position?: InputMaybe<IntFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeCategoryUpdateOneRequiredWithoutEmployeeSubCategoryNestedInput = {
  connect?: InputMaybe<EmployeeCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeeCategoryCreateOrConnectWithoutEmployeeSubCategoryInput>;
  create?: InputMaybe<EmployeeCategoryCreateWithoutEmployeeSubCategoryInput>;
  update?: InputMaybe<EmployeeCategoryUpdateWithoutEmployeeSubCategoryInput>;
  upsert?: InputMaybe<EmployeeCategoryUpsertWithoutEmployeeSubCategoryInput>;
};

export type EmployeeCategoryUpdateOneWithoutEmployeeNestedInput = {
  connect?: InputMaybe<EmployeeCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeeCategoryCreateOrConnectWithoutEmployeeInput>;
  create?: InputMaybe<EmployeeCategoryCreateWithoutEmployeeInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<EmployeeCategoryUpdateWithoutEmployeeInput>;
  upsert?: InputMaybe<EmployeeCategoryUpsertWithoutEmployeeInput>;
};

export type EmployeeCategoryUpdateWithoutEmployeeInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employeeSubCategory?: InputMaybe<EmployeeSubCategoryUpdateManyWithoutEmployeeCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  position?: InputMaybe<IntFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeCategoryUpdateWithoutEmployeeSubCategoryInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateManyWithoutEmployeeCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  position?: InputMaybe<IntFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeCategoryUpsertWithoutEmployeeInput = {
  create: EmployeeCategoryCreateWithoutEmployeeInput;
  update: EmployeeCategoryUpdateWithoutEmployeeInput;
};

export type EmployeeCategoryUpsertWithoutEmployeeSubCategoryInput = {
  create: EmployeeCategoryCreateWithoutEmployeeSubCategoryInput;
  update: EmployeeCategoryUpdateWithoutEmployeeSubCategoryInput;
};

export type EmployeeCategoryWhereInput = {
  AND?: InputMaybe<Array<EmployeeCategoryWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeCategoryWhereInput>>;
  OR?: InputMaybe<Array<EmployeeCategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  employee?: InputMaybe<EmployeeListRelationFilter>;
  employeeSubCategory?: InputMaybe<EmployeeSubCategoryListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EmployeeCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeCount = {
  __typename?: 'EmployeeCount';
  cartItem: Scalars['Int']['output'];
  orderItem: Scalars['Int']['output'];
  products: Scalars['Int']['output'];
};


export type EmployeeCountCartItemArgs = {
  where?: InputMaybe<CartItemWhereInput>;
};


export type EmployeeCountOrderItemArgs = {
  where?: InputMaybe<OrderItemWhereInput>;
};


export type EmployeeCountProductsArgs = {
  where?: InputMaybe<ProductWhereInput>;
};

export type EmployeeCountAggregate = {
  __typename?: 'EmployeeCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  employeeCategoryId: Scalars['Int']['output'];
  employeeSubCategoryId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  shortDescription: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type EmployeeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  employeeCategoryId?: InputMaybe<SortOrder>;
  employeeSubCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  shortDescription?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EmployeeCreateInput = {
  cartItem?: InputMaybe<CartItemCreateNestedManyWithoutEmployeeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  employeeCategory?: InputMaybe<EmployeeCategoryCreateNestedOneWithoutEmployeeInput>;
  employeeSubCategory?: InputMaybe<EmployeeSubCategoryCreateNestedOneWithoutEmployeeInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  orderItem?: InputMaybe<OrderItemCreateNestedManyWithoutEmployeeInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutEmployeeInput>;
  shortDescription: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeCreateManyEmployeeCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  employeeSubCategoryId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  shortDescription: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeCreateManyEmployeeCategoryInputEnvelope = {
  data: Array<EmployeeCreateManyEmployeeCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmployeeCreateManyEmployeeSubCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  employeeCategoryId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  shortDescription: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeCreateManyEmployeeSubCategoryInputEnvelope = {
  data: Array<EmployeeCreateManyEmployeeSubCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmployeeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  employeeCategoryId?: InputMaybe<Scalars['String']['input']>;
  employeeSubCategoryId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  shortDescription: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeCreateNestedManyWithoutEmployeeCategoryInput = {
  connect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeCreateOrConnectWithoutEmployeeCategoryInput>>;
  create?: InputMaybe<Array<EmployeeCreateWithoutEmployeeCategoryInput>>;
  createMany?: InputMaybe<EmployeeCreateManyEmployeeCategoryInputEnvelope>;
};

export type EmployeeCreateNestedManyWithoutEmployeeSubCategoryInput = {
  connect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeCreateOrConnectWithoutEmployeeSubCategoryInput>>;
  create?: InputMaybe<Array<EmployeeCreateWithoutEmployeeSubCategoryInput>>;
  createMany?: InputMaybe<EmployeeCreateManyEmployeeSubCategoryInputEnvelope>;
};

export type EmployeeCreateNestedOneWithoutCartItemInput = {
  connect?: InputMaybe<EmployeeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeeCreateOrConnectWithoutCartItemInput>;
  create?: InputMaybe<EmployeeCreateWithoutCartItemInput>;
};

export type EmployeeCreateNestedOneWithoutOrderItemInput = {
  connect?: InputMaybe<EmployeeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeeCreateOrConnectWithoutOrderItemInput>;
  create?: InputMaybe<EmployeeCreateWithoutOrderItemInput>;
};

export type EmployeeCreateNestedOneWithoutProductsInput = {
  connect?: InputMaybe<EmployeeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeeCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<EmployeeCreateWithoutProductsInput>;
};

export type EmployeeCreateOrConnectWithoutCartItemInput = {
  create: EmployeeCreateWithoutCartItemInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeCreateOrConnectWithoutEmployeeCategoryInput = {
  create: EmployeeCreateWithoutEmployeeCategoryInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeCreateOrConnectWithoutEmployeeSubCategoryInput = {
  create: EmployeeCreateWithoutEmployeeSubCategoryInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeCreateOrConnectWithoutOrderItemInput = {
  create: EmployeeCreateWithoutOrderItemInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeCreateOrConnectWithoutProductsInput = {
  create: EmployeeCreateWithoutProductsInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeCreateWithoutCartItemInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  employeeCategory?: InputMaybe<EmployeeCategoryCreateNestedOneWithoutEmployeeInput>;
  employeeSubCategory?: InputMaybe<EmployeeSubCategoryCreateNestedOneWithoutEmployeeInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  orderItem?: InputMaybe<OrderItemCreateNestedManyWithoutEmployeeInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutEmployeeInput>;
  shortDescription: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeCreateWithoutEmployeeCategoryInput = {
  cartItem?: InputMaybe<CartItemCreateNestedManyWithoutEmployeeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  employeeSubCategory?: InputMaybe<EmployeeSubCategoryCreateNestedOneWithoutEmployeeInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  orderItem?: InputMaybe<OrderItemCreateNestedManyWithoutEmployeeInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutEmployeeInput>;
  shortDescription: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeCreateWithoutEmployeeSubCategoryInput = {
  cartItem?: InputMaybe<CartItemCreateNestedManyWithoutEmployeeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  employeeCategory?: InputMaybe<EmployeeCategoryCreateNestedOneWithoutEmployeeInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  orderItem?: InputMaybe<OrderItemCreateNestedManyWithoutEmployeeInput>;
  products?: InputMaybe<ProductCreateNestedManyWithoutEmployeeInput>;
  shortDescription: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeCreateWithoutOrderItemInput = {
  cartItem?: InputMaybe<CartItemCreateNestedManyWithoutEmployeeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  employeeCategory?: InputMaybe<EmployeeCategoryCreateNestedOneWithoutEmployeeInput>;
  employeeSubCategory?: InputMaybe<EmployeeSubCategoryCreateNestedOneWithoutEmployeeInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutEmployeeInput>;
  shortDescription: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeCreateWithoutProductsInput = {
  cartItem?: InputMaybe<CartItemCreateNestedManyWithoutEmployeeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  employeeCategory?: InputMaybe<EmployeeCategoryCreateNestedOneWithoutEmployeeInput>;
  employeeSubCategory?: InputMaybe<EmployeeSubCategoryCreateNestedOneWithoutEmployeeInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  orderItem?: InputMaybe<OrderItemCreateNestedManyWithoutEmployeeInput>;
  shortDescription: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeGroupBy = {
  __typename?: 'EmployeeGroupBy';
  _count?: Maybe<EmployeeCountAggregate>;
  _max?: Maybe<EmployeeMaxAggregate>;
  _min?: Maybe<EmployeeMinAggregate>;
  createdAt: Scalars['DateTime']['output'];
  employeeCategoryId?: Maybe<Scalars['String']['output']>;
  employeeSubCategoryId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  shortDescription: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type EmployeeListRelationFilter = {
  every?: InputMaybe<EmployeeWhereInput>;
  none?: InputMaybe<EmployeeWhereInput>;
  some?: InputMaybe<EmployeeWhereInput>;
};

export type EmployeeMaxAggregate = {
  __typename?: 'EmployeeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  employeeCategoryId?: Maybe<Scalars['String']['output']>;
  employeeSubCategoryId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EmployeeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  employeeCategoryId?: InputMaybe<SortOrder>;
  employeeSubCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  shortDescription?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EmployeeMinAggregate = {
  __typename?: 'EmployeeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  employeeCategoryId?: Maybe<Scalars['String']['output']>;
  employeeSubCategoryId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EmployeeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  employeeCategoryId?: InputMaybe<SortOrder>;
  employeeSubCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  shortDescription?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EmployeeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EmployeeOrderByWithAggregationInput = {
  _count?: InputMaybe<EmployeeCountOrderByAggregateInput>;
  _max?: InputMaybe<EmployeeMaxOrderByAggregateInput>;
  _min?: InputMaybe<EmployeeMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  employeeCategoryId?: InputMaybe<SortOrderInput>;
  employeeSubCategoryId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  shortDescription?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EmployeeOrderByWithRelationInput = {
  cartItem?: InputMaybe<CartItemOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  employeeCategory?: InputMaybe<EmployeeCategoryOrderByWithRelationInput>;
  employeeCategoryId?: InputMaybe<SortOrderInput>;
  employeeSubCategory?: InputMaybe<EmployeeSubCategoryOrderByWithRelationInput>;
  employeeSubCategoryId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  orderItem?: InputMaybe<OrderItemOrderByRelationAggregateInput>;
  products?: InputMaybe<ProductOrderByRelationAggregateInput>;
  shortDescription?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EmployeeRelationFilter = {
  is?: InputMaybe<EmployeeWhereInput>;
  isNot?: InputMaybe<EmployeeWhereInput>;
};

export enum EmployeeScalarFieldEnum {
  CreatedAt = 'createdAt',
  EmployeeCategoryId = 'employeeCategoryId',
  EmployeeSubCategoryId = 'employeeSubCategoryId',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  ShortDescription = 'shortDescription',
  UpdatedAt = 'updatedAt'
}

export type EmployeeScalarWhereInput = {
  AND?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  OR?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  employeeCategoryId?: InputMaybe<StringNullableFilter>;
  employeeSubCategoryId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  shortDescription?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EmployeeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<EmployeeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<EmployeeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<EmployeeScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  employeeCategoryId?: InputMaybe<StringNullableWithAggregatesFilter>;
  employeeSubCategoryId?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  shortDescription?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type EmployeeSubCategory = {
  __typename?: 'EmployeeSubCategory';
  _count?: Maybe<EmployeeSubCategoryCount>;
  createdAt: Scalars['DateTime']['output'];
  employee: Array<Employee>;
  employeeCategory: EmployeeCategory;
  employeeCategoryId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type EmployeeSubCategoryEmployeeArgs = {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeWhereInput>;
};

export type EmployeeSubCategoryCount = {
  __typename?: 'EmployeeSubCategoryCount';
  employee: Scalars['Int']['output'];
};


export type EmployeeSubCategoryCountEmployeeArgs = {
  where?: InputMaybe<EmployeeWhereInput>;
};

export type EmployeeSubCategoryCountAggregate = {
  __typename?: 'EmployeeSubCategoryCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  employeeCategoryId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  slug: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type EmployeeSubCategoryCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  employeeCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EmployeeSubCategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  employee?: InputMaybe<EmployeeCreateNestedManyWithoutEmployeeSubCategoryInput>;
  employeeCategory: EmployeeCategoryCreateNestedOneWithoutEmployeeSubCategoryInput;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeSubCategoryCreateManyEmployeeCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeSubCategoryCreateManyEmployeeCategoryInputEnvelope = {
  data: Array<EmployeeSubCategoryCreateManyEmployeeCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmployeeSubCategoryCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  employeeCategoryId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeSubCategoryCreateNestedManyWithoutEmployeeCategoryInput = {
  connect?: InputMaybe<Array<EmployeeSubCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeSubCategoryCreateOrConnectWithoutEmployeeCategoryInput>>;
  create?: InputMaybe<Array<EmployeeSubCategoryCreateWithoutEmployeeCategoryInput>>;
  createMany?: InputMaybe<EmployeeSubCategoryCreateManyEmployeeCategoryInputEnvelope>;
};

export type EmployeeSubCategoryCreateNestedOneWithoutEmployeeInput = {
  connect?: InputMaybe<EmployeeSubCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeeSubCategoryCreateOrConnectWithoutEmployeeInput>;
  create?: InputMaybe<EmployeeSubCategoryCreateWithoutEmployeeInput>;
};

export type EmployeeSubCategoryCreateOrConnectWithoutEmployeeCategoryInput = {
  create: EmployeeSubCategoryCreateWithoutEmployeeCategoryInput;
  where: EmployeeSubCategoryWhereUniqueInput;
};

export type EmployeeSubCategoryCreateOrConnectWithoutEmployeeInput = {
  create: EmployeeSubCategoryCreateWithoutEmployeeInput;
  where: EmployeeSubCategoryWhereUniqueInput;
};

export type EmployeeSubCategoryCreateWithoutEmployeeCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  employee?: InputMaybe<EmployeeCreateNestedManyWithoutEmployeeSubCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeSubCategoryCreateWithoutEmployeeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  employeeCategory: EmployeeCategoryCreateNestedOneWithoutEmployeeSubCategoryInput;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeSubCategoryGroupBy = {
  __typename?: 'EmployeeSubCategoryGroupBy';
  _count?: Maybe<EmployeeSubCategoryCountAggregate>;
  _max?: Maybe<EmployeeSubCategoryMaxAggregate>;
  _min?: Maybe<EmployeeSubCategoryMinAggregate>;
  createdAt: Scalars['DateTime']['output'];
  employeeCategoryId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type EmployeeSubCategoryListRelationFilter = {
  every?: InputMaybe<EmployeeSubCategoryWhereInput>;
  none?: InputMaybe<EmployeeSubCategoryWhereInput>;
  some?: InputMaybe<EmployeeSubCategoryWhereInput>;
};

export type EmployeeSubCategoryMaxAggregate = {
  __typename?: 'EmployeeSubCategoryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  employeeCategoryId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EmployeeSubCategoryMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  employeeCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EmployeeSubCategoryMinAggregate = {
  __typename?: 'EmployeeSubCategoryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  employeeCategoryId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EmployeeSubCategoryMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  employeeCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EmployeeSubCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EmployeeSubCategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<EmployeeSubCategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<EmployeeSubCategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<EmployeeSubCategoryMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  employeeCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EmployeeSubCategoryOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  employee?: InputMaybe<EmployeeOrderByRelationAggregateInput>;
  employeeCategory?: InputMaybe<EmployeeCategoryOrderByWithRelationInput>;
  employeeCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EmployeeSubCategoryRelationFilter = {
  is?: InputMaybe<EmployeeSubCategoryWhereInput>;
  isNot?: InputMaybe<EmployeeSubCategoryWhereInput>;
};

export enum EmployeeSubCategoryScalarFieldEnum {
  CreatedAt = 'createdAt',
  EmployeeCategoryId = 'employeeCategoryId',
  Id = 'id',
  Name = 'name',
  Slug = 'slug',
  UpdatedAt = 'updatedAt'
}

export type EmployeeSubCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<EmployeeSubCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeSubCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<EmployeeSubCategoryScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  employeeCategoryId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EmployeeSubCategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<EmployeeSubCategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<EmployeeSubCategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<EmployeeSubCategoryScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  employeeCategoryId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type EmployeeSubCategoryUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateManyWithoutEmployeeSubCategoryNestedInput>;
  employeeCategory?: InputMaybe<EmployeeCategoryUpdateOneRequiredWithoutEmployeeSubCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeSubCategoryUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeSubCategoryUpdateManyWithWhereWithoutEmployeeCategoryInput = {
  data: EmployeeSubCategoryUpdateManyMutationInput;
  where: EmployeeSubCategoryScalarWhereInput;
};

export type EmployeeSubCategoryUpdateManyWithoutEmployeeCategoryNestedInput = {
  connect?: InputMaybe<Array<EmployeeSubCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeSubCategoryCreateOrConnectWithoutEmployeeCategoryInput>>;
  create?: InputMaybe<Array<EmployeeSubCategoryCreateWithoutEmployeeCategoryInput>>;
  createMany?: InputMaybe<EmployeeSubCategoryCreateManyEmployeeCategoryInputEnvelope>;
  delete?: InputMaybe<Array<EmployeeSubCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EmployeeSubCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EmployeeSubCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<EmployeeSubCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<EmployeeSubCategoryUpdateWithWhereUniqueWithoutEmployeeCategoryInput>>;
  updateMany?: InputMaybe<Array<EmployeeSubCategoryUpdateManyWithWhereWithoutEmployeeCategoryInput>>;
  upsert?: InputMaybe<Array<EmployeeSubCategoryUpsertWithWhereUniqueWithoutEmployeeCategoryInput>>;
};

export type EmployeeSubCategoryUpdateOneWithoutEmployeeNestedInput = {
  connect?: InputMaybe<EmployeeSubCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeeSubCategoryCreateOrConnectWithoutEmployeeInput>;
  create?: InputMaybe<EmployeeSubCategoryCreateWithoutEmployeeInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<EmployeeSubCategoryUpdateWithoutEmployeeInput>;
  upsert?: InputMaybe<EmployeeSubCategoryUpsertWithoutEmployeeInput>;
};

export type EmployeeSubCategoryUpdateWithWhereUniqueWithoutEmployeeCategoryInput = {
  data: EmployeeSubCategoryUpdateWithoutEmployeeCategoryInput;
  where: EmployeeSubCategoryWhereUniqueInput;
};

export type EmployeeSubCategoryUpdateWithoutEmployeeCategoryInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateManyWithoutEmployeeSubCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeSubCategoryUpdateWithoutEmployeeInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employeeCategory?: InputMaybe<EmployeeCategoryUpdateOneRequiredWithoutEmployeeSubCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeSubCategoryUpsertWithWhereUniqueWithoutEmployeeCategoryInput = {
  create: EmployeeSubCategoryCreateWithoutEmployeeCategoryInput;
  update: EmployeeSubCategoryUpdateWithoutEmployeeCategoryInput;
  where: EmployeeSubCategoryWhereUniqueInput;
};

export type EmployeeSubCategoryUpsertWithoutEmployeeInput = {
  create: EmployeeSubCategoryCreateWithoutEmployeeInput;
  update: EmployeeSubCategoryUpdateWithoutEmployeeInput;
};

export type EmployeeSubCategoryWhereInput = {
  AND?: InputMaybe<Array<EmployeeSubCategoryWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeSubCategoryWhereInput>>;
  OR?: InputMaybe<Array<EmployeeSubCategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  employee?: InputMaybe<EmployeeListRelationFilter>;
  employeeCategory?: InputMaybe<EmployeeCategoryRelationFilter>;
  employeeCategoryId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EmployeeSubCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeeUpdateInput = {
  cartItem?: InputMaybe<CartItemUpdateManyWithoutEmployeeNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employeeCategory?: InputMaybe<EmployeeCategoryUpdateOneWithoutEmployeeNestedInput>;
  employeeSubCategory?: InputMaybe<EmployeeSubCategoryUpdateOneWithoutEmployeeNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderItem?: InputMaybe<OrderItemUpdateManyWithoutEmployeeNestedInput>;
  products?: InputMaybe<ProductUpdateManyWithoutEmployeeNestedInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeUpdateManyWithWhereWithoutEmployeeCategoryInput = {
  data: EmployeeUpdateManyMutationInput;
  where: EmployeeScalarWhereInput;
};

export type EmployeeUpdateManyWithWhereWithoutEmployeeSubCategoryInput = {
  data: EmployeeUpdateManyMutationInput;
  where: EmployeeScalarWhereInput;
};

export type EmployeeUpdateManyWithoutEmployeeCategoryNestedInput = {
  connect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeCreateOrConnectWithoutEmployeeCategoryInput>>;
  create?: InputMaybe<Array<EmployeeCreateWithoutEmployeeCategoryInput>>;
  createMany?: InputMaybe<EmployeeCreateManyEmployeeCategoryInputEnvelope>;
  delete?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  set?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  update?: InputMaybe<Array<EmployeeUpdateWithWhereUniqueWithoutEmployeeCategoryInput>>;
  updateMany?: InputMaybe<Array<EmployeeUpdateManyWithWhereWithoutEmployeeCategoryInput>>;
  upsert?: InputMaybe<Array<EmployeeUpsertWithWhereUniqueWithoutEmployeeCategoryInput>>;
};

export type EmployeeUpdateManyWithoutEmployeeSubCategoryNestedInput = {
  connect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeCreateOrConnectWithoutEmployeeSubCategoryInput>>;
  create?: InputMaybe<Array<EmployeeCreateWithoutEmployeeSubCategoryInput>>;
  createMany?: InputMaybe<EmployeeCreateManyEmployeeSubCategoryInputEnvelope>;
  delete?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  set?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  update?: InputMaybe<Array<EmployeeUpdateWithWhereUniqueWithoutEmployeeSubCategoryInput>>;
  updateMany?: InputMaybe<Array<EmployeeUpdateManyWithWhereWithoutEmployeeSubCategoryInput>>;
  upsert?: InputMaybe<Array<EmployeeUpsertWithWhereUniqueWithoutEmployeeSubCategoryInput>>;
};

export type EmployeeUpdateOneWithoutCartItemNestedInput = {
  connect?: InputMaybe<EmployeeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeeCreateOrConnectWithoutCartItemInput>;
  create?: InputMaybe<EmployeeCreateWithoutCartItemInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<EmployeeUpdateWithoutCartItemInput>;
  upsert?: InputMaybe<EmployeeUpsertWithoutCartItemInput>;
};

export type EmployeeUpdateOneWithoutOrderItemNestedInput = {
  connect?: InputMaybe<EmployeeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeeCreateOrConnectWithoutOrderItemInput>;
  create?: InputMaybe<EmployeeCreateWithoutOrderItemInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<EmployeeUpdateWithoutOrderItemInput>;
  upsert?: InputMaybe<EmployeeUpsertWithoutOrderItemInput>;
};

export type EmployeeUpdateOneWithoutProductsNestedInput = {
  connect?: InputMaybe<EmployeeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeeCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<EmployeeCreateWithoutProductsInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<EmployeeUpdateWithoutProductsInput>;
  upsert?: InputMaybe<EmployeeUpsertWithoutProductsInput>;
};

export type EmployeeUpdateWithWhereUniqueWithoutEmployeeCategoryInput = {
  data: EmployeeUpdateWithoutEmployeeCategoryInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeUpdateWithWhereUniqueWithoutEmployeeSubCategoryInput = {
  data: EmployeeUpdateWithoutEmployeeSubCategoryInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeUpdateWithoutCartItemInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employeeCategory?: InputMaybe<EmployeeCategoryUpdateOneWithoutEmployeeNestedInput>;
  employeeSubCategory?: InputMaybe<EmployeeSubCategoryUpdateOneWithoutEmployeeNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderItem?: InputMaybe<OrderItemUpdateManyWithoutEmployeeNestedInput>;
  products?: InputMaybe<ProductUpdateManyWithoutEmployeeNestedInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeUpdateWithoutEmployeeCategoryInput = {
  cartItem?: InputMaybe<CartItemUpdateManyWithoutEmployeeNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employeeSubCategory?: InputMaybe<EmployeeSubCategoryUpdateOneWithoutEmployeeNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderItem?: InputMaybe<OrderItemUpdateManyWithoutEmployeeNestedInput>;
  products?: InputMaybe<ProductUpdateManyWithoutEmployeeNestedInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeUpdateWithoutEmployeeSubCategoryInput = {
  cartItem?: InputMaybe<CartItemUpdateManyWithoutEmployeeNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employeeCategory?: InputMaybe<EmployeeCategoryUpdateOneWithoutEmployeeNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderItem?: InputMaybe<OrderItemUpdateManyWithoutEmployeeNestedInput>;
  products?: InputMaybe<ProductUpdateManyWithoutEmployeeNestedInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeUpdateWithoutOrderItemInput = {
  cartItem?: InputMaybe<CartItemUpdateManyWithoutEmployeeNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employeeCategory?: InputMaybe<EmployeeCategoryUpdateOneWithoutEmployeeNestedInput>;
  employeeSubCategory?: InputMaybe<EmployeeSubCategoryUpdateOneWithoutEmployeeNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutEmployeeNestedInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeUpdateWithoutProductsInput = {
  cartItem?: InputMaybe<CartItemUpdateManyWithoutEmployeeNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  employeeCategory?: InputMaybe<EmployeeCategoryUpdateOneWithoutEmployeeNestedInput>;
  employeeSubCategory?: InputMaybe<EmployeeSubCategoryUpdateOneWithoutEmployeeNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderItem?: InputMaybe<OrderItemUpdateManyWithoutEmployeeNestedInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeUpsertWithWhereUniqueWithoutEmployeeCategoryInput = {
  create: EmployeeCreateWithoutEmployeeCategoryInput;
  update: EmployeeUpdateWithoutEmployeeCategoryInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeUpsertWithWhereUniqueWithoutEmployeeSubCategoryInput = {
  create: EmployeeCreateWithoutEmployeeSubCategoryInput;
  update: EmployeeUpdateWithoutEmployeeSubCategoryInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeUpsertWithoutCartItemInput = {
  create: EmployeeCreateWithoutCartItemInput;
  update: EmployeeUpdateWithoutCartItemInput;
};

export type EmployeeUpsertWithoutOrderItemInput = {
  create: EmployeeCreateWithoutOrderItemInput;
  update: EmployeeUpdateWithoutOrderItemInput;
};

export type EmployeeUpsertWithoutProductsInput = {
  create: EmployeeCreateWithoutProductsInput;
  update: EmployeeUpdateWithoutProductsInput;
};

export type EmployeeWhereInput = {
  AND?: InputMaybe<Array<EmployeeWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeWhereInput>>;
  OR?: InputMaybe<Array<EmployeeWhereInput>>;
  cartItem?: InputMaybe<CartItemListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  employeeCategory?: InputMaybe<EmployeeCategoryRelationFilter>;
  employeeCategoryId?: InputMaybe<StringNullableFilter>;
  employeeSubCategory?: InputMaybe<EmployeeSubCategoryRelationFilter>;
  employeeSubCategoryId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  orderItem?: InputMaybe<OrderItemListRelationFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
  shortDescription?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EmployeeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EnumCustomProductStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<CustomProductStatus>;
};

export type EnumCustomProductStatusFilter = {
  equals?: InputMaybe<CustomProductStatus>;
  in?: InputMaybe<Array<CustomProductStatus>>;
  not?: InputMaybe<NestedEnumCustomProductStatusFilter>;
  notIn?: InputMaybe<Array<CustomProductStatus>>;
};

export type EnumCustomProductStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCustomProductStatusFilter>;
  _min?: InputMaybe<NestedEnumCustomProductStatusFilter>;
  equals?: InputMaybe<CustomProductStatus>;
  in?: InputMaybe<Array<CustomProductStatus>>;
  not?: InputMaybe<NestedEnumCustomProductStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CustomProductStatus>>;
};

export type EnumOrderStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<OrderStatus>;
};

export type EnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type EnumOrderStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumOrderStatusFilter>;
  _min?: InputMaybe<NestedEnumOrderStatusFilter>;
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type EnumProductTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ProductType>;
};

export type EnumProductTypeFilter = {
  equals?: InputMaybe<ProductType>;
  in?: InputMaybe<Array<ProductType>>;
  not?: InputMaybe<NestedEnumProductTypeFilter>;
  notIn?: InputMaybe<Array<ProductType>>;
};

export type EnumProductTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumProductTypeFilter>;
  _min?: InputMaybe<NestedEnumProductTypeFilter>;
  equals?: InputMaybe<ProductType>;
  in?: InputMaybe<Array<ProductType>>;
  not?: InputMaybe<NestedEnumProductTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ProductType>>;
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

export type FetaureCategory = {
  __typename?: 'FetaureCategory';
  _count?: Maybe<FetaureCategoryCount>;
  fetaures: Array<ProductFetaure>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
};


export type FetaureCategoryFetauresArgs = {
  cursor?: InputMaybe<ProductFetaureWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductFetaureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductFetaureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFetaureWhereInput>;
};


export type FetaureCategoryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type FetaureCategoryCount = {
  __typename?: 'FetaureCategoryCount';
  fetaures: Scalars['Int']['output'];
  products: Scalars['Int']['output'];
};


export type FetaureCategoryCountFetauresArgs = {
  where?: InputMaybe<ProductFetaureWhereInput>;
};


export type FetaureCategoryCountProductsArgs = {
  where?: InputMaybe<ProductWhereInput>;
};

export type FetaureCategoryCountAggregate = {
  __typename?: 'FetaureCategoryCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type FetaureCategoryCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type FetaureCategoryCreateInput = {
  fetaures?: InputMaybe<ProductFetaureCreateNestedManyWithoutFetaureCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutFetauresCategoriesInput>;
};

export type FetaureCategoryCreateManyInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type FetaureCategoryCreateNestedManyWithoutProductsInput = {
  connect?: InputMaybe<Array<FetaureCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FetaureCategoryCreateOrConnectWithoutProductsInput>>;
  create?: InputMaybe<Array<FetaureCategoryCreateWithoutProductsInput>>;
};

export type FetaureCategoryCreateNestedOneWithoutFetauresInput = {
  connect?: InputMaybe<FetaureCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FetaureCategoryCreateOrConnectWithoutFetauresInput>;
  create?: InputMaybe<FetaureCategoryCreateWithoutFetauresInput>;
};

export type FetaureCategoryCreateOrConnectWithoutFetauresInput = {
  create: FetaureCategoryCreateWithoutFetauresInput;
  where: FetaureCategoryWhereUniqueInput;
};

export type FetaureCategoryCreateOrConnectWithoutProductsInput = {
  create: FetaureCategoryCreateWithoutProductsInput;
  where: FetaureCategoryWhereUniqueInput;
};

export type FetaureCategoryCreateWithoutFetauresInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateNestedManyWithoutFetauresCategoriesInput>;
};

export type FetaureCategoryCreateWithoutProductsInput = {
  fetaures?: InputMaybe<ProductFetaureCreateNestedManyWithoutFetaureCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type FetaureCategoryGroupBy = {
  __typename?: 'FetaureCategoryGroupBy';
  _count?: Maybe<FetaureCategoryCountAggregate>;
  _max?: Maybe<FetaureCategoryMaxAggregate>;
  _min?: Maybe<FetaureCategoryMinAggregate>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type FetaureCategoryListRelationFilter = {
  every?: InputMaybe<FetaureCategoryWhereInput>;
  none?: InputMaybe<FetaureCategoryWhereInput>;
  some?: InputMaybe<FetaureCategoryWhereInput>;
};

export type FetaureCategoryMaxAggregate = {
  __typename?: 'FetaureCategoryMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type FetaureCategoryMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type FetaureCategoryMinAggregate = {
  __typename?: 'FetaureCategoryMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type FetaureCategoryMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type FetaureCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FetaureCategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<FetaureCategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<FetaureCategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<FetaureCategoryMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type FetaureCategoryOrderByWithRelationInput = {
  fetaures?: InputMaybe<ProductFetaureOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<ProductOrderByRelationAggregateInput>;
};

export type FetaureCategoryRelationFilter = {
  is?: InputMaybe<FetaureCategoryWhereInput>;
  isNot?: InputMaybe<FetaureCategoryWhereInput>;
};

export enum FetaureCategoryScalarFieldEnum {
  Id = 'id',
  Name = 'name'
}

export type FetaureCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<FetaureCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<FetaureCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<FetaureCategoryScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type FetaureCategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FetaureCategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FetaureCategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FetaureCategoryScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type FetaureCategoryUpdateInput = {
  fetaures?: InputMaybe<ProductFetaureUpdateManyWithoutFetaureCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutFetauresCategoriesNestedInput>;
};

export type FetaureCategoryUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FetaureCategoryUpdateManyWithWhereWithoutProductsInput = {
  data: FetaureCategoryUpdateManyMutationInput;
  where: FetaureCategoryScalarWhereInput;
};

export type FetaureCategoryUpdateManyWithoutProductsNestedInput = {
  connect?: InputMaybe<Array<FetaureCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FetaureCategoryCreateOrConnectWithoutProductsInput>>;
  create?: InputMaybe<Array<FetaureCategoryCreateWithoutProductsInput>>;
  delete?: InputMaybe<Array<FetaureCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FetaureCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FetaureCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<FetaureCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<FetaureCategoryUpdateWithWhereUniqueWithoutProductsInput>>;
  updateMany?: InputMaybe<Array<FetaureCategoryUpdateManyWithWhereWithoutProductsInput>>;
  upsert?: InputMaybe<Array<FetaureCategoryUpsertWithWhereUniqueWithoutProductsInput>>;
};

export type FetaureCategoryUpdateOneRequiredWithoutFetauresNestedInput = {
  connect?: InputMaybe<FetaureCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FetaureCategoryCreateOrConnectWithoutFetauresInput>;
  create?: InputMaybe<FetaureCategoryCreateWithoutFetauresInput>;
  update?: InputMaybe<FetaureCategoryUpdateWithoutFetauresInput>;
  upsert?: InputMaybe<FetaureCategoryUpsertWithoutFetauresInput>;
};

export type FetaureCategoryUpdateWithWhereUniqueWithoutProductsInput = {
  data: FetaureCategoryUpdateWithoutProductsInput;
  where: FetaureCategoryWhereUniqueInput;
};

export type FetaureCategoryUpdateWithoutFetauresInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutFetauresCategoriesNestedInput>;
};

export type FetaureCategoryUpdateWithoutProductsInput = {
  fetaures?: InputMaybe<ProductFetaureUpdateManyWithoutFetaureCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FetaureCategoryUpsertWithWhereUniqueWithoutProductsInput = {
  create: FetaureCategoryCreateWithoutProductsInput;
  update: FetaureCategoryUpdateWithoutProductsInput;
  where: FetaureCategoryWhereUniqueInput;
};

export type FetaureCategoryUpsertWithoutFetauresInput = {
  create: FetaureCategoryCreateWithoutFetauresInput;
  update: FetaureCategoryUpdateWithoutFetauresInput;
};

export type FetaureCategoryWhereInput = {
  AND?: InputMaybe<Array<FetaureCategoryWhereInput>>;
  NOT?: InputMaybe<Array<FetaureCategoryWhereInput>>;
  OR?: InputMaybe<Array<FetaureCategoryWhereInput>>;
  fetaures?: InputMaybe<ProductFetaureListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
};

export type FetaureCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
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

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
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

export type MainCategory = {
  __typename?: 'MainCategory';
  _count?: Maybe<MainCategoryCount>;
  categories: Array<Category>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type MainCategoryCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};

export type MainCategoryCount = {
  __typename?: 'MainCategoryCount';
  categories: Scalars['Int']['output'];
};


export type MainCategoryCountCategoriesArgs = {
  where?: InputMaybe<CategoryWhereInput>;
};

export type MainCategoryCountAggregate = {
  __typename?: 'MainCategoryCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  slug: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type MainCategoryCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MainCategoryCreateInput = {
  categories?: InputMaybe<CategoryCreateNestedManyWithoutMainCategoryInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MainCategoryCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MainCategoryCreateNestedOneWithoutCategoriesInput = {
  connect?: InputMaybe<MainCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MainCategoryCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<MainCategoryCreateWithoutCategoriesInput>;
};

export type MainCategoryCreateOrConnectWithoutCategoriesInput = {
  create: MainCategoryCreateWithoutCategoriesInput;
  where: MainCategoryWhereUniqueInput;
};

export type MainCategoryCreateWithoutCategoriesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MainCategoryGroupBy = {
  __typename?: 'MainCategoryGroupBy';
  _count?: Maybe<MainCategoryCountAggregate>;
  _max?: Maybe<MainCategoryMaxAggregate>;
  _min?: Maybe<MainCategoryMinAggregate>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MainCategoryMaxAggregate = {
  __typename?: 'MainCategoryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MainCategoryMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MainCategoryMinAggregate = {
  __typename?: 'MainCategoryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MainCategoryMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MainCategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<MainCategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<MainCategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<MainCategoryMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MainCategoryOrderByWithRelationInput = {
  categories?: InputMaybe<CategoryOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MainCategoryRelationFilter = {
  is?: InputMaybe<MainCategoryWhereInput>;
  isNot?: InputMaybe<MainCategoryWhereInput>;
};

export enum MainCategoryScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Slug = 'slug',
  UpdatedAt = 'updatedAt'
}

export type MainCategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MainCategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MainCategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MainCategoryScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type MainCategoryUpdateInput = {
  categories?: InputMaybe<CategoryUpdateManyWithoutMainCategoryNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MainCategoryUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MainCategoryUpdateOneWithoutCategoriesNestedInput = {
  connect?: InputMaybe<MainCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MainCategoryCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<MainCategoryCreateWithoutCategoriesInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<MainCategoryUpdateWithoutCategoriesInput>;
  upsert?: InputMaybe<MainCategoryUpsertWithoutCategoriesInput>;
};

export type MainCategoryUpdateWithoutCategoriesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MainCategoryUpsertWithoutCategoriesInput = {
  create: MainCategoryCreateWithoutCategoriesInput;
  update: MainCategoryUpdateWithoutCategoriesInput;
};

export type MainCategoryWhereInput = {
  AND?: InputMaybe<Array<MainCategoryWhereInput>>;
  NOT?: InputMaybe<Array<MainCategoryWhereInput>>;
  OR?: InputMaybe<Array<MainCategoryWhereInput>>;
  categories?: InputMaybe<CategoryListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MainCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminLogin?: Maybe<LoginResponsce>;
  adminRefreshToken?: Maybe<Scalars['String']['output']>;
  adminRegister?: Maybe<DefaultResponsce>;
  createCheckoutSession?: Maybe<PaymentSessionCreateResponse>;
  createManyCart: AffectedRowsOutput;
  createManyCartItem: AffectedRowsOutput;
  createManyCategory: AffectedRowsOutput;
  createManyDefaultShippingAdress: AffectedRowsOutput;
  createManyEmployee: AffectedRowsOutput;
  createManyEmployeeCategory: AffectedRowsOutput;
  createManyEmployeeSubCategory: AffectedRowsOutput;
  createManyFetaureCategory: AffectedRowsOutput;
  createManyMainCategory: AffectedRowsOutput;
  createManyOrder: AffectedRowsOutput;
  createManyOrderItem: AffectedRowsOutput;
  createManyPaymentResult: AffectedRowsOutput;
  createManyProduct: AffectedRowsOutput;
  createManyProductFetaure: AffectedRowsOutput;
  createManyReview: AffectedRowsOutput;
  createManyShippingAddress: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUserTokens: AffectedRowsOutput;
  createOneCart: Cart;
  createOneCartItem: CartItem;
  createOneCategory: Category;
  createOneDefaultShippingAdress: DefaultShippingAdress;
  createOneEmployee: Employee;
  createOneEmployeeCategory: EmployeeCategory;
  createOneEmployeeSubCategory: EmployeeSubCategory;
  createOneFetaureCategory: FetaureCategory;
  createOneMainCategory: MainCategory;
  createOneOrder: Order;
  createOneOrderItem: OrderItem;
  createOnePaymentResult: PaymentResult;
  createOneProduct: Product;
  createOneProductFetaure: ProductFetaure;
  createOneReview: Review;
  createOneShippingAddress: ShippingAddress;
  createOneUser: User;
  createOneUserTokens: UserTokens;
  deleteManyCart: AffectedRowsOutput;
  deleteManyCartItem: AffectedRowsOutput;
  deleteManyCategory: AffectedRowsOutput;
  deleteManyDefaultShippingAdress: AffectedRowsOutput;
  deleteManyEmployee: AffectedRowsOutput;
  deleteManyEmployeeCategory: AffectedRowsOutput;
  deleteManyEmployeeSubCategory: AffectedRowsOutput;
  deleteManyFetaureCategory: AffectedRowsOutput;
  deleteManyMainCategory: AffectedRowsOutput;
  deleteManyOrder: AffectedRowsOutput;
  deleteManyOrderItem: AffectedRowsOutput;
  deleteManyPaymentResult: AffectedRowsOutput;
  deleteManyProduct: AffectedRowsOutput;
  deleteManyProductFetaure: AffectedRowsOutput;
  deleteManyReview: AffectedRowsOutput;
  deleteManyShippingAddress: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserTokens: AffectedRowsOutput;
  deleteOneCart?: Maybe<Cart>;
  deleteOneCartItem?: Maybe<CartItem>;
  deleteOneCategory?: Maybe<Category>;
  deleteOneDefaultShippingAdress?: Maybe<DefaultShippingAdress>;
  deleteOneEmployee?: Maybe<Employee>;
  deleteOneEmployeeCategory?: Maybe<EmployeeCategory>;
  deleteOneEmployeeSubCategory?: Maybe<EmployeeSubCategory>;
  deleteOneFetaureCategory?: Maybe<FetaureCategory>;
  deleteOneMainCategory?: Maybe<MainCategory>;
  deleteOneOrder?: Maybe<Order>;
  deleteOneOrderItem?: Maybe<OrderItem>;
  deleteOnePaymentResult?: Maybe<PaymentResult>;
  deleteOneProduct?: Maybe<Product>;
  deleteOneProductFetaure?: Maybe<ProductFetaure>;
  deleteOneReview?: Maybe<Review>;
  deleteOneShippingAddress?: Maybe<ShippingAddress>;
  deleteOneUser?: Maybe<User>;
  deleteOneUserTokens?: Maybe<UserTokens>;
  forgetPassword?: Maybe<DefaultResponsce>;
  login?: Maybe<LoginResponsce>;
  logout?: Maybe<DefaultResponsce>;
  passwordResetTokenVerify?: Maybe<DefaultResponsce>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  register?: Maybe<DefaultResponsce>;
  resetPassByVerficationLink?: Maybe<DefaultResponsce>;
  updateManyCart: AffectedRowsOutput;
  updateManyCartItem: AffectedRowsOutput;
  updateManyCategory: AffectedRowsOutput;
  updateManyDefaultShippingAdress: AffectedRowsOutput;
  updateManyEmployee: AffectedRowsOutput;
  updateManyEmployeeCategory: AffectedRowsOutput;
  updateManyEmployeeSubCategory: AffectedRowsOutput;
  updateManyFetaureCategory: AffectedRowsOutput;
  updateManyMainCategory: AffectedRowsOutput;
  updateManyOrder: AffectedRowsOutput;
  updateManyOrderItem: AffectedRowsOutput;
  updateManyPaymentResult: AffectedRowsOutput;
  updateManyProduct: AffectedRowsOutput;
  updateManyProductFetaure: AffectedRowsOutput;
  updateManyReview: AffectedRowsOutput;
  updateManyShippingAddress: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUserTokens: AffectedRowsOutput;
  updateOneCart?: Maybe<Cart>;
  updateOneCartItem?: Maybe<CartItem>;
  updateOneCategory?: Maybe<Category>;
  updateOneDefaultShippingAdress?: Maybe<DefaultShippingAdress>;
  updateOneEmployee?: Maybe<Employee>;
  updateOneEmployeeCategory?: Maybe<EmployeeCategory>;
  updateOneEmployeeSubCategory?: Maybe<EmployeeSubCategory>;
  updateOneFetaureCategory?: Maybe<FetaureCategory>;
  updateOneMainCategory?: Maybe<MainCategory>;
  updateOneOrder?: Maybe<Order>;
  updateOneOrderItem?: Maybe<OrderItem>;
  updateOnePaymentResult?: Maybe<PaymentResult>;
  updateOneProduct?: Maybe<Product>;
  updateOneProductFetaure?: Maybe<ProductFetaure>;
  updateOneReview?: Maybe<Review>;
  updateOneShippingAddress?: Maybe<ShippingAddress>;
  updateOneUser?: Maybe<User>;
  updateOneUserTokens?: Maybe<UserTokens>;
  updateProfile?: Maybe<DefaultResponsce>;
  uploadFile?: Maybe<FileUploadResponsce>;
  upsertOneCart: Cart;
  upsertOneCartItem: CartItem;
  upsertOneCategory: Category;
  upsertOneDefaultShippingAdress: DefaultShippingAdress;
  upsertOneEmployee: Employee;
  upsertOneEmployeeCategory: EmployeeCategory;
  upsertOneEmployeeSubCategory: EmployeeSubCategory;
  upsertOneFetaureCategory: FetaureCategory;
  upsertOneMainCategory: MainCategory;
  upsertOneOrder: Order;
  upsertOneOrderItem: OrderItem;
  upsertOnePaymentResult: PaymentResult;
  upsertOneProduct: Product;
  upsertOneProductFetaure: ProductFetaure;
  upsertOneReview: Review;
  upsertOneShippingAddress: ShippingAddress;
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


export type MutationCreateCheckoutSessionArgs = {
  input: CreateCheckoutSessionargs;
};


export type MutationCreateManyCartArgs = {
  data: Array<CartCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyCartItemArgs = {
  data: Array<CartItemCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyCategoryArgs = {
  data: Array<CategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyDefaultShippingAdressArgs = {
  data: Array<DefaultShippingAdressCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyEmployeeArgs = {
  data: Array<EmployeeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyEmployeeCategoryArgs = {
  data: Array<EmployeeCategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyEmployeeSubCategoryArgs = {
  data: Array<EmployeeSubCategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyFetaureCategoryArgs = {
  data: Array<FetaureCategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMainCategoryArgs = {
  data: Array<MainCategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyOrderArgs = {
  data: Array<OrderCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyOrderItemArgs = {
  data: Array<OrderItemCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyPaymentResultArgs = {
  data: Array<PaymentResultCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyProductArgs = {
  data: Array<ProductCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyProductFetaureArgs = {
  data: Array<ProductFetaureCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyReviewArgs = {
  data: Array<ReviewCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyShippingAddressArgs = {
  data: Array<ShippingAddressCreateManyInput>;
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


export type MutationCreateOneCartArgs = {
  data: CartCreateInput;
};


export type MutationCreateOneCartItemArgs = {
  data: CartItemCreateInput;
};


export type MutationCreateOneCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateOneDefaultShippingAdressArgs = {
  data: DefaultShippingAdressCreateInput;
};


export type MutationCreateOneEmployeeArgs = {
  data: EmployeeCreateInput;
};


export type MutationCreateOneEmployeeCategoryArgs = {
  data: EmployeeCategoryCreateInput;
};


export type MutationCreateOneEmployeeSubCategoryArgs = {
  data: EmployeeSubCategoryCreateInput;
};


export type MutationCreateOneFetaureCategoryArgs = {
  data: FetaureCategoryCreateInput;
};


export type MutationCreateOneMainCategoryArgs = {
  data: MainCategoryCreateInput;
};


export type MutationCreateOneOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreateOneOrderItemArgs = {
  data: OrderItemCreateInput;
};


export type MutationCreateOnePaymentResultArgs = {
  data: PaymentResultCreateInput;
};


export type MutationCreateOneProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateOneProductFetaureArgs = {
  data: ProductFetaureCreateInput;
};


export type MutationCreateOneReviewArgs = {
  data: ReviewCreateInput;
};


export type MutationCreateOneShippingAddressArgs = {
  data: ShippingAddressCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneUserTokensArgs = {
  data: UserTokensCreateInput;
};


export type MutationDeleteManyCartArgs = {
  where?: InputMaybe<CartWhereInput>;
};


export type MutationDeleteManyCartItemArgs = {
  where?: InputMaybe<CartItemWhereInput>;
};


export type MutationDeleteManyCategoryArgs = {
  where?: InputMaybe<CategoryWhereInput>;
};


export type MutationDeleteManyDefaultShippingAdressArgs = {
  where?: InputMaybe<DefaultShippingAdressWhereInput>;
};


export type MutationDeleteManyEmployeeArgs = {
  where?: InputMaybe<EmployeeWhereInput>;
};


export type MutationDeleteManyEmployeeCategoryArgs = {
  where?: InputMaybe<EmployeeCategoryWhereInput>;
};


export type MutationDeleteManyEmployeeSubCategoryArgs = {
  where?: InputMaybe<EmployeeSubCategoryWhereInput>;
};


export type MutationDeleteManyFetaureCategoryArgs = {
  where?: InputMaybe<FetaureCategoryWhereInput>;
};


export type MutationDeleteManyMainCategoryArgs = {
  where?: InputMaybe<MainCategoryWhereInput>;
};


export type MutationDeleteManyOrderArgs = {
  where?: InputMaybe<OrderWhereInput>;
};


export type MutationDeleteManyOrderItemArgs = {
  where?: InputMaybe<OrderItemWhereInput>;
};


export type MutationDeleteManyPaymentResultArgs = {
  where?: InputMaybe<PaymentResultWhereInput>;
};


export type MutationDeleteManyProductArgs = {
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationDeleteManyProductFetaureArgs = {
  where?: InputMaybe<ProductFetaureWhereInput>;
};


export type MutationDeleteManyReviewArgs = {
  where?: InputMaybe<ReviewWhereInput>;
};


export type MutationDeleteManyShippingAddressArgs = {
  where?: InputMaybe<ShippingAddressWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyUserTokensArgs = {
  where?: InputMaybe<UserTokensWhereInput>;
};


export type MutationDeleteOneCartArgs = {
  where: CartWhereUniqueInput;
};


export type MutationDeleteOneCartItemArgs = {
  where: CartItemWhereUniqueInput;
};


export type MutationDeleteOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteOneDefaultShippingAdressArgs = {
  where: DefaultShippingAdressWhereUniqueInput;
};


export type MutationDeleteOneEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
};


export type MutationDeleteOneEmployeeCategoryArgs = {
  where: EmployeeCategoryWhereUniqueInput;
};


export type MutationDeleteOneEmployeeSubCategoryArgs = {
  where: EmployeeSubCategoryWhereUniqueInput;
};


export type MutationDeleteOneFetaureCategoryArgs = {
  where: FetaureCategoryWhereUniqueInput;
};


export type MutationDeleteOneMainCategoryArgs = {
  where: MainCategoryWhereUniqueInput;
};


export type MutationDeleteOneOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationDeleteOneOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type MutationDeleteOnePaymentResultArgs = {
  where: PaymentResultWhereUniqueInput;
};


export type MutationDeleteOneProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteOneProductFetaureArgs = {
  where: ProductFetaureWhereUniqueInput;
};


export type MutationDeleteOneReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type MutationDeleteOneShippingAddressArgs = {
  where: ShippingAddressWhereUniqueInput;
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


export type MutationUpdateManyCartArgs = {
  data: CartUpdateManyMutationInput;
  where?: InputMaybe<CartWhereInput>;
};


export type MutationUpdateManyCartItemArgs = {
  data: CartItemUpdateManyMutationInput;
  where?: InputMaybe<CartItemWhereInput>;
};


export type MutationUpdateManyCategoryArgs = {
  data: CategoryUpdateManyMutationInput;
  where?: InputMaybe<CategoryWhereInput>;
};


export type MutationUpdateManyDefaultShippingAdressArgs = {
  data: DefaultShippingAdressUpdateManyMutationInput;
  where?: InputMaybe<DefaultShippingAdressWhereInput>;
};


export type MutationUpdateManyEmployeeArgs = {
  data: EmployeeUpdateManyMutationInput;
  where?: InputMaybe<EmployeeWhereInput>;
};


export type MutationUpdateManyEmployeeCategoryArgs = {
  data: EmployeeCategoryUpdateManyMutationInput;
  where?: InputMaybe<EmployeeCategoryWhereInput>;
};


export type MutationUpdateManyEmployeeSubCategoryArgs = {
  data: EmployeeSubCategoryUpdateManyMutationInput;
  where?: InputMaybe<EmployeeSubCategoryWhereInput>;
};


export type MutationUpdateManyFetaureCategoryArgs = {
  data: FetaureCategoryUpdateManyMutationInput;
  where?: InputMaybe<FetaureCategoryWhereInput>;
};


export type MutationUpdateManyMainCategoryArgs = {
  data: MainCategoryUpdateManyMutationInput;
  where?: InputMaybe<MainCategoryWhereInput>;
};


export type MutationUpdateManyOrderArgs = {
  data: OrderUpdateManyMutationInput;
  where?: InputMaybe<OrderWhereInput>;
};


export type MutationUpdateManyOrderItemArgs = {
  data: OrderItemUpdateManyMutationInput;
  where?: InputMaybe<OrderItemWhereInput>;
};


export type MutationUpdateManyPaymentResultArgs = {
  data: PaymentResultUpdateManyMutationInput;
  where?: InputMaybe<PaymentResultWhereInput>;
};


export type MutationUpdateManyProductArgs = {
  data: ProductUpdateManyMutationInput;
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationUpdateManyProductFetaureArgs = {
  data: ProductFetaureUpdateManyMutationInput;
  where?: InputMaybe<ProductFetaureWhereInput>;
};


export type MutationUpdateManyReviewArgs = {
  data: ReviewUpdateManyMutationInput;
  where?: InputMaybe<ReviewWhereInput>;
};


export type MutationUpdateManyShippingAddressArgs = {
  data: ShippingAddressUpdateManyMutationInput;
  where?: InputMaybe<ShippingAddressWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyUserTokensArgs = {
  data: UserTokensUpdateManyMutationInput;
  where?: InputMaybe<UserTokensWhereInput>;
};


export type MutationUpdateOneCartArgs = {
  data: CartUpdateInput;
  where: CartWhereUniqueInput;
};


export type MutationUpdateOneCartItemArgs = {
  data: CartItemUpdateInput;
  where: CartItemWhereUniqueInput;
};


export type MutationUpdateOneCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateOneDefaultShippingAdressArgs = {
  data: DefaultShippingAdressUpdateInput;
  where: DefaultShippingAdressWhereUniqueInput;
};


export type MutationUpdateOneEmployeeArgs = {
  data: EmployeeUpdateInput;
  where: EmployeeWhereUniqueInput;
};


export type MutationUpdateOneEmployeeCategoryArgs = {
  data: EmployeeCategoryUpdateInput;
  where: EmployeeCategoryWhereUniqueInput;
};


export type MutationUpdateOneEmployeeSubCategoryArgs = {
  data: EmployeeSubCategoryUpdateInput;
  where: EmployeeSubCategoryWhereUniqueInput;
};


export type MutationUpdateOneFetaureCategoryArgs = {
  data: FetaureCategoryUpdateInput;
  where: FetaureCategoryWhereUniqueInput;
};


export type MutationUpdateOneMainCategoryArgs = {
  data: MainCategoryUpdateInput;
  where: MainCategoryWhereUniqueInput;
};


export type MutationUpdateOneOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpdateOneOrderItemArgs = {
  data: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};


export type MutationUpdateOnePaymentResultArgs = {
  data: PaymentResultUpdateInput;
  where: PaymentResultWhereUniqueInput;
};


export type MutationUpdateOneProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateOneProductFetaureArgs = {
  data: ProductFetaureUpdateInput;
  where: ProductFetaureWhereUniqueInput;
};


export type MutationUpdateOneReviewArgs = {
  data: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};


export type MutationUpdateOneShippingAddressArgs = {
  data: ShippingAddressUpdateInput;
  where: ShippingAddressWhereUniqueInput;
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


export type MutationUpsertOneCartArgs = {
  create: CartCreateInput;
  update: CartUpdateInput;
  where: CartWhereUniqueInput;
};


export type MutationUpsertOneCartItemArgs = {
  create: CartItemCreateInput;
  update: CartItemUpdateInput;
  where: CartItemWhereUniqueInput;
};


export type MutationUpsertOneCategoryArgs = {
  create: CategoryCreateInput;
  update: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertOneDefaultShippingAdressArgs = {
  create: DefaultShippingAdressCreateInput;
  update: DefaultShippingAdressUpdateInput;
  where: DefaultShippingAdressWhereUniqueInput;
};


export type MutationUpsertOneEmployeeArgs = {
  create: EmployeeCreateInput;
  update: EmployeeUpdateInput;
  where: EmployeeWhereUniqueInput;
};


export type MutationUpsertOneEmployeeCategoryArgs = {
  create: EmployeeCategoryCreateInput;
  update: EmployeeCategoryUpdateInput;
  where: EmployeeCategoryWhereUniqueInput;
};


export type MutationUpsertOneEmployeeSubCategoryArgs = {
  create: EmployeeSubCategoryCreateInput;
  update: EmployeeSubCategoryUpdateInput;
  where: EmployeeSubCategoryWhereUniqueInput;
};


export type MutationUpsertOneFetaureCategoryArgs = {
  create: FetaureCategoryCreateInput;
  update: FetaureCategoryUpdateInput;
  where: FetaureCategoryWhereUniqueInput;
};


export type MutationUpsertOneMainCategoryArgs = {
  create: MainCategoryCreateInput;
  update: MainCategoryUpdateInput;
  where: MainCategoryWhereUniqueInput;
};


export type MutationUpsertOneOrderArgs = {
  create: OrderCreateInput;
  update: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpsertOneOrderItemArgs = {
  create: OrderItemCreateInput;
  update: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};


export type MutationUpsertOnePaymentResultArgs = {
  create: PaymentResultCreateInput;
  update: PaymentResultUpdateInput;
  where: PaymentResultWhereUniqueInput;
};


export type MutationUpsertOneProductArgs = {
  create: ProductCreateInput;
  update: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertOneProductFetaureArgs = {
  create: ProductFetaureCreateInput;
  update: ProductFetaureUpdateInput;
  where: ProductFetaureWhereUniqueInput;
};


export type MutationUpsertOneReviewArgs = {
  create: ReviewCreateInput;
  update: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};


export type MutationUpsertOneShippingAddressArgs = {
  create: ShippingAddressCreateInput;
  update: ShippingAddressUpdateInput;
  where: ShippingAddressWhereUniqueInput;
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

export type NestedEnumCustomProductStatusFilter = {
  equals?: InputMaybe<CustomProductStatus>;
  in?: InputMaybe<Array<CustomProductStatus>>;
  not?: InputMaybe<NestedEnumCustomProductStatusFilter>;
  notIn?: InputMaybe<Array<CustomProductStatus>>;
};

export type NestedEnumCustomProductStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumCustomProductStatusFilter>;
  _min?: InputMaybe<NestedEnumCustomProductStatusFilter>;
  equals?: InputMaybe<CustomProductStatus>;
  in?: InputMaybe<Array<CustomProductStatus>>;
  not?: InputMaybe<NestedEnumCustomProductStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CustomProductStatus>>;
};

export type NestedEnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type NestedEnumOrderStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumOrderStatusFilter>;
  _min?: InputMaybe<NestedEnumOrderStatusFilter>;
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type NestedEnumProductTypeFilter = {
  equals?: InputMaybe<ProductType>;
  in?: InputMaybe<Array<ProductType>>;
  not?: InputMaybe<NestedEnumProductTypeFilter>;
  notIn?: InputMaybe<Array<ProductType>>;
};

export type NestedEnumProductTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumProductTypeFilter>;
  _min?: InputMaybe<NestedEnumProductTypeFilter>;
  equals?: InputMaybe<ProductType>;
  in?: InputMaybe<Array<ProductType>>;
  not?: InputMaybe<NestedEnumProductTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ProductType>>;
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

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
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

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Order = {
  __typename?: 'Order';
  _count?: Maybe<OrderCount>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  itemsPrePrice: Scalars['Float']['output'];
  itemsPrePricePaymentSessionId?: Maybe<Scalars['String']['output']>;
  itemsPrice: Scalars['Float']['output'];
  itemsTotalPricePaymentSessionId?: Maybe<Scalars['String']['output']>;
  orderItem: Array<OrderItem>;
  paymentResult?: Maybe<PaymentResult>;
  shippingAddress?: Maybe<ShippingAddress>;
  shippingPrice: Scalars['Float']['output'];
  status: OrderStatus;
  taxPrice: Scalars['Float']['output'];
  totalPrice: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};


export type OrderOrderItemArgs = {
  cursor?: InputMaybe<OrderItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderItemWhereInput>;
};

export type OrderAvgAggregate = {
  __typename?: 'OrderAvgAggregate';
  itemsPrePrice?: Maybe<Scalars['Float']['output']>;
  itemsPrice?: Maybe<Scalars['Float']['output']>;
  shippingPrice?: Maybe<Scalars['Float']['output']>;
  taxPrice?: Maybe<Scalars['Float']['output']>;
  totalPrice?: Maybe<Scalars['Float']['output']>;
};

export type OrderAvgOrderByAggregateInput = {
  itemsPrePrice?: InputMaybe<SortOrder>;
  itemsPrice?: InputMaybe<SortOrder>;
  shippingPrice?: InputMaybe<SortOrder>;
  taxPrice?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderCount = {
  __typename?: 'OrderCount';
  orderItem: Scalars['Int']['output'];
};


export type OrderCountOrderItemArgs = {
  where?: InputMaybe<OrderItemWhereInput>;
};

export type OrderCountAggregate = {
  __typename?: 'OrderCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemsPrePrice: Scalars['Int']['output'];
  itemsPrePricePaymentSessionId: Scalars['Int']['output'];
  itemsPrice: Scalars['Int']['output'];
  itemsTotalPricePaymentSessionId: Scalars['Int']['output'];
  shippingPrice: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  taxPrice: Scalars['Int']['output'];
  totalPrice: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type OrderCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemsPrePrice?: InputMaybe<SortOrder>;
  itemsPrePricePaymentSessionId?: InputMaybe<SortOrder>;
  itemsPrice?: InputMaybe<SortOrder>;
  itemsTotalPricePaymentSessionId?: InputMaybe<SortOrder>;
  shippingPrice?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  taxPrice?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type OrderCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  itemsPrePrice?: InputMaybe<Scalars['Float']['input']>;
  itemsPrePricePaymentSessionId?: InputMaybe<Scalars['String']['input']>;
  itemsPrice: Scalars['Float']['input'];
  itemsTotalPricePaymentSessionId?: InputMaybe<Scalars['String']['input']>;
  orderItem?: InputMaybe<OrderItemCreateNestedManyWithoutOrderInput>;
  paymentResult?: InputMaybe<PaymentResultCreateNestedOneWithoutOrderInput>;
  shippingAddress?: InputMaybe<ShippingAddressCreateNestedOneWithoutOrderInput>;
  shippingPrice?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<OrderStatus>;
  taxPrice?: InputMaybe<Scalars['Float']['input']>;
  totalPrice?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutOrdersInput;
};

export type OrderCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  itemsPrePrice?: InputMaybe<Scalars['Float']['input']>;
  itemsPrePricePaymentSessionId?: InputMaybe<Scalars['String']['input']>;
  itemsPrice: Scalars['Float']['input'];
  itemsTotalPricePaymentSessionId?: InputMaybe<Scalars['String']['input']>;
  shippingPrice?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<OrderStatus>;
  taxPrice?: InputMaybe<Scalars['Float']['input']>;
  totalPrice?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type OrderCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  itemsPrePrice?: InputMaybe<Scalars['Float']['input']>;
  itemsPrePricePaymentSessionId?: InputMaybe<Scalars['String']['input']>;
  itemsPrice: Scalars['Float']['input'];
  itemsTotalPricePaymentSessionId?: InputMaybe<Scalars['String']['input']>;
  shippingPrice?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<OrderStatus>;
  taxPrice?: InputMaybe<Scalars['Float']['input']>;
  totalPrice?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderCreateManyUserInputEnvelope = {
  data: Array<OrderCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<OrderCreateWithoutUserInput>>;
  createMany?: InputMaybe<OrderCreateManyUserInputEnvelope>;
};

export type OrderCreateNestedOneWithoutOrderItemInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutOrderItemInput>;
  create?: InputMaybe<OrderCreateWithoutOrderItemInput>;
};

export type OrderCreateNestedOneWithoutPaymentResultInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutPaymentResultInput>;
  create?: InputMaybe<OrderCreateWithoutPaymentResultInput>;
};

export type OrderCreateNestedOneWithoutShippingAddressInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutShippingAddressInput>;
  create?: InputMaybe<OrderCreateWithoutShippingAddressInput>;
};

export type OrderCreateOrConnectWithoutOrderItemInput = {
  create: OrderCreateWithoutOrderItemInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateOrConnectWithoutPaymentResultInput = {
  create: OrderCreateWithoutPaymentResultInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateOrConnectWithoutShippingAddressInput = {
  create: OrderCreateWithoutShippingAddressInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateOrConnectWithoutUserInput = {
  create: OrderCreateWithoutUserInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateWithoutOrderItemInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  itemsPrePrice?: InputMaybe<Scalars['Float']['input']>;
  itemsPrePricePaymentSessionId?: InputMaybe<Scalars['String']['input']>;
  itemsPrice: Scalars['Float']['input'];
  itemsTotalPricePaymentSessionId?: InputMaybe<Scalars['String']['input']>;
  paymentResult?: InputMaybe<PaymentResultCreateNestedOneWithoutOrderInput>;
  shippingAddress?: InputMaybe<ShippingAddressCreateNestedOneWithoutOrderInput>;
  shippingPrice?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<OrderStatus>;
  taxPrice?: InputMaybe<Scalars['Float']['input']>;
  totalPrice?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutOrdersInput;
};

export type OrderCreateWithoutPaymentResultInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  itemsPrePrice?: InputMaybe<Scalars['Float']['input']>;
  itemsPrePricePaymentSessionId?: InputMaybe<Scalars['String']['input']>;
  itemsPrice: Scalars['Float']['input'];
  itemsTotalPricePaymentSessionId?: InputMaybe<Scalars['String']['input']>;
  orderItem?: InputMaybe<OrderItemCreateNestedManyWithoutOrderInput>;
  shippingAddress?: InputMaybe<ShippingAddressCreateNestedOneWithoutOrderInput>;
  shippingPrice?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<OrderStatus>;
  taxPrice?: InputMaybe<Scalars['Float']['input']>;
  totalPrice?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutOrdersInput;
};

export type OrderCreateWithoutShippingAddressInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  itemsPrePrice?: InputMaybe<Scalars['Float']['input']>;
  itemsPrePricePaymentSessionId?: InputMaybe<Scalars['String']['input']>;
  itemsPrice: Scalars['Float']['input'];
  itemsTotalPricePaymentSessionId?: InputMaybe<Scalars['String']['input']>;
  orderItem?: InputMaybe<OrderItemCreateNestedManyWithoutOrderInput>;
  paymentResult?: InputMaybe<PaymentResultCreateNestedOneWithoutOrderInput>;
  shippingPrice?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<OrderStatus>;
  taxPrice?: InputMaybe<Scalars['Float']['input']>;
  totalPrice?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutOrdersInput;
};

export type OrderCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  itemsPrePrice?: InputMaybe<Scalars['Float']['input']>;
  itemsPrePricePaymentSessionId?: InputMaybe<Scalars['String']['input']>;
  itemsPrice: Scalars['Float']['input'];
  itemsTotalPricePaymentSessionId?: InputMaybe<Scalars['String']['input']>;
  orderItem?: InputMaybe<OrderItemCreateNestedManyWithoutOrderInput>;
  paymentResult?: InputMaybe<PaymentResultCreateNestedOneWithoutOrderInput>;
  shippingAddress?: InputMaybe<ShippingAddressCreateNestedOneWithoutOrderInput>;
  shippingPrice?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<OrderStatus>;
  taxPrice?: InputMaybe<Scalars['Float']['input']>;
  totalPrice?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderGroupBy = {
  __typename?: 'OrderGroupBy';
  _avg?: Maybe<OrderAvgAggregate>;
  _count?: Maybe<OrderCountAggregate>;
  _max?: Maybe<OrderMaxAggregate>;
  _min?: Maybe<OrderMinAggregate>;
  _sum?: Maybe<OrderSumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  itemsPrePrice: Scalars['Float']['output'];
  itemsPrePricePaymentSessionId?: Maybe<Scalars['String']['output']>;
  itemsPrice: Scalars['Float']['output'];
  itemsTotalPricePaymentSessionId?: Maybe<Scalars['String']['output']>;
  shippingPrice: Scalars['Float']['output'];
  status: OrderStatus;
  taxPrice: Scalars['Float']['output'];
  totalPrice: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  employee?: Maybe<Employee>;
  employeeId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  order: Order;
  orderId: Scalars['String']['output'];
  product: Product;
  productId: Scalars['String']['output'];
  qty: Scalars['Int']['output'];
};

export type OrderItemAvgAggregate = {
  __typename?: 'OrderItemAvgAggregate';
  qty?: Maybe<Scalars['Float']['output']>;
};

export type OrderItemAvgOrderByAggregateInput = {
  qty?: InputMaybe<SortOrder>;
};

export type OrderItemCountAggregate = {
  __typename?: 'OrderItemCountAggregate';
  _all: Scalars['Int']['output'];
  employeeId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  orderId: Scalars['Int']['output'];
  productId: Scalars['Int']['output'];
  qty: Scalars['Int']['output'];
};

export type OrderItemCountOrderByAggregateInput = {
  employeeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderId?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
};

export type OrderItemCreateInput = {
  employee?: InputMaybe<EmployeeCreateNestedOneWithoutOrderItemInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  order: OrderCreateNestedOneWithoutOrderItemInput;
  product: ProductCreateNestedOneWithoutOrderItemInput;
  qty: Scalars['Int']['input'];
};

export type OrderItemCreateManyEmployeeInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  qty: Scalars['Int']['input'];
};

export type OrderItemCreateManyEmployeeInputEnvelope = {
  data: Array<OrderItemCreateManyEmployeeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderItemCreateManyInput = {
  employeeId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  qty: Scalars['Int']['input'];
};

export type OrderItemCreateManyOrderInput = {
  employeeId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  qty: Scalars['Int']['input'];
};

export type OrderItemCreateManyOrderInputEnvelope = {
  data: Array<OrderItemCreateManyOrderInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderItemCreateManyProductInput = {
  employeeId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['String']['input'];
  qty: Scalars['Int']['input'];
};

export type OrderItemCreateManyProductInputEnvelope = {
  data: Array<OrderItemCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderItemCreateNestedManyWithoutEmployeeInput = {
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderItemCreateOrConnectWithoutEmployeeInput>>;
  create?: InputMaybe<Array<OrderItemCreateWithoutEmployeeInput>>;
  createMany?: InputMaybe<OrderItemCreateManyEmployeeInputEnvelope>;
};

export type OrderItemCreateNestedManyWithoutOrderInput = {
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderItemCreateOrConnectWithoutOrderInput>>;
  create?: InputMaybe<Array<OrderItemCreateWithoutOrderInput>>;
  createMany?: InputMaybe<OrderItemCreateManyOrderInputEnvelope>;
};

export type OrderItemCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderItemCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<OrderItemCreateWithoutProductInput>>;
  createMany?: InputMaybe<OrderItemCreateManyProductInputEnvelope>;
};

export type OrderItemCreateOrConnectWithoutEmployeeInput = {
  create: OrderItemCreateWithoutEmployeeInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemCreateOrConnectWithoutOrderInput = {
  create: OrderItemCreateWithoutOrderInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemCreateOrConnectWithoutProductInput = {
  create: OrderItemCreateWithoutProductInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemCreateWithoutEmployeeInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  order: OrderCreateNestedOneWithoutOrderItemInput;
  product: ProductCreateNestedOneWithoutOrderItemInput;
  qty: Scalars['Int']['input'];
};

export type OrderItemCreateWithoutOrderInput = {
  employee?: InputMaybe<EmployeeCreateNestedOneWithoutOrderItemInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  product: ProductCreateNestedOneWithoutOrderItemInput;
  qty: Scalars['Int']['input'];
};

export type OrderItemCreateWithoutProductInput = {
  employee?: InputMaybe<EmployeeCreateNestedOneWithoutOrderItemInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  order: OrderCreateNestedOneWithoutOrderItemInput;
  qty: Scalars['Int']['input'];
};

export type OrderItemGroupBy = {
  __typename?: 'OrderItemGroupBy';
  _avg?: Maybe<OrderItemAvgAggregate>;
  _count?: Maybe<OrderItemCountAggregate>;
  _max?: Maybe<OrderItemMaxAggregate>;
  _min?: Maybe<OrderItemMinAggregate>;
  _sum?: Maybe<OrderItemSumAggregate>;
  employeeId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  qty: Scalars['Int']['output'];
};

export type OrderItemListRelationFilter = {
  every?: InputMaybe<OrderItemWhereInput>;
  none?: InputMaybe<OrderItemWhereInput>;
  some?: InputMaybe<OrderItemWhereInput>;
};

export type OrderItemMaxAggregate = {
  __typename?: 'OrderItemMaxAggregate';
  employeeId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  orderId?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
};

export type OrderItemMaxOrderByAggregateInput = {
  employeeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderId?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
};

export type OrderItemMinAggregate = {
  __typename?: 'OrderItemMinAggregate';
  employeeId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  orderId?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
};

export type OrderItemMinOrderByAggregateInput = {
  employeeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderId?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
};

export type OrderItemOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OrderItemOrderByWithAggregationInput = {
  _avg?: InputMaybe<OrderItemAvgOrderByAggregateInput>;
  _count?: InputMaybe<OrderItemCountOrderByAggregateInput>;
  _max?: InputMaybe<OrderItemMaxOrderByAggregateInput>;
  _min?: InputMaybe<OrderItemMinOrderByAggregateInput>;
  _sum?: InputMaybe<OrderItemSumOrderByAggregateInput>;
  employeeId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  orderId?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
};

export type OrderItemOrderByWithRelationInput = {
  employee?: InputMaybe<EmployeeOrderByWithRelationInput>;
  employeeId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  order?: InputMaybe<OrderOrderByWithRelationInput>;
  orderId?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  qty?: InputMaybe<SortOrder>;
};

export enum OrderItemScalarFieldEnum {
  EmployeeId = 'employeeId',
  Id = 'id',
  OrderId = 'orderId',
  ProductId = 'productId',
  Qty = 'qty'
}

export type OrderItemScalarWhereInput = {
  AND?: InputMaybe<Array<OrderItemScalarWhereInput>>;
  NOT?: InputMaybe<Array<OrderItemScalarWhereInput>>;
  OR?: InputMaybe<Array<OrderItemScalarWhereInput>>;
  employeeId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  orderId?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  qty?: InputMaybe<IntFilter>;
};

export type OrderItemScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OrderItemScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OrderItemScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OrderItemScalarWhereWithAggregatesInput>>;
  employeeId?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  orderId?: InputMaybe<StringWithAggregatesFilter>;
  productId?: InputMaybe<StringWithAggregatesFilter>;
  qty?: InputMaybe<IntWithAggregatesFilter>;
};

export type OrderItemSumAggregate = {
  __typename?: 'OrderItemSumAggregate';
  qty?: Maybe<Scalars['Int']['output']>;
};

export type OrderItemSumOrderByAggregateInput = {
  qty?: InputMaybe<SortOrder>;
};

export type OrderItemUpdateInput = {
  employee?: InputMaybe<EmployeeUpdateOneWithoutOrderItemNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<OrderUpdateOneRequiredWithoutOrderItemNestedInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutOrderItemNestedInput>;
  qty?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type OrderItemUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  qty?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type OrderItemUpdateManyWithWhereWithoutEmployeeInput = {
  data: OrderItemUpdateManyMutationInput;
  where: OrderItemScalarWhereInput;
};

export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
  data: OrderItemUpdateManyMutationInput;
  where: OrderItemScalarWhereInput;
};

export type OrderItemUpdateManyWithWhereWithoutProductInput = {
  data: OrderItemUpdateManyMutationInput;
  where: OrderItemScalarWhereInput;
};

export type OrderItemUpdateManyWithoutEmployeeNestedInput = {
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderItemCreateOrConnectWithoutEmployeeInput>>;
  create?: InputMaybe<Array<OrderItemCreateWithoutEmployeeInput>>;
  createMany?: InputMaybe<OrderItemCreateManyEmployeeInputEnvelope>;
  delete?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderItemUpdateWithWhereUniqueWithoutEmployeeInput>>;
  updateMany?: InputMaybe<Array<OrderItemUpdateManyWithWhereWithoutEmployeeInput>>;
  upsert?: InputMaybe<Array<OrderItemUpsertWithWhereUniqueWithoutEmployeeInput>>;
};

export type OrderItemUpdateManyWithoutOrderNestedInput = {
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderItemCreateOrConnectWithoutOrderInput>>;
  create?: InputMaybe<Array<OrderItemCreateWithoutOrderInput>>;
  createMany?: InputMaybe<OrderItemCreateManyOrderInputEnvelope>;
  delete?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderItemUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany?: InputMaybe<Array<OrderItemUpdateManyWithWhereWithoutOrderInput>>;
  upsert?: InputMaybe<Array<OrderItemUpsertWithWhereUniqueWithoutOrderInput>>;
};

export type OrderItemUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderItemCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<OrderItemCreateWithoutProductInput>>;
  createMany?: InputMaybe<OrderItemCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderItemUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<OrderItemUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<OrderItemUpsertWithWhereUniqueWithoutProductInput>>;
};

export type OrderItemUpdateWithWhereUniqueWithoutEmployeeInput = {
  data: OrderItemUpdateWithoutEmployeeInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
  data: OrderItemUpdateWithoutOrderInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
  data: OrderItemUpdateWithoutProductInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemUpdateWithoutEmployeeInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<OrderUpdateOneRequiredWithoutOrderItemNestedInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutOrderItemNestedInput>;
  qty?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type OrderItemUpdateWithoutOrderInput = {
  employee?: InputMaybe<EmployeeUpdateOneWithoutOrderItemNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutOrderItemNestedInput>;
  qty?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type OrderItemUpdateWithoutProductInput = {
  employee?: InputMaybe<EmployeeUpdateOneWithoutOrderItemNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<OrderUpdateOneRequiredWithoutOrderItemNestedInput>;
  qty?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type OrderItemUpsertWithWhereUniqueWithoutEmployeeInput = {
  create: OrderItemCreateWithoutEmployeeInput;
  update: OrderItemUpdateWithoutEmployeeInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
  create: OrderItemCreateWithoutOrderInput;
  update: OrderItemUpdateWithoutOrderInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
  create: OrderItemCreateWithoutProductInput;
  update: OrderItemUpdateWithoutProductInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemWhereInput = {
  AND?: InputMaybe<Array<OrderItemWhereInput>>;
  NOT?: InputMaybe<Array<OrderItemWhereInput>>;
  OR?: InputMaybe<Array<OrderItemWhereInput>>;
  employee?: InputMaybe<EmployeeRelationFilter>;
  employeeId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderRelationFilter>;
  orderId?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  qty?: InputMaybe<IntFilter>;
};

export type OrderItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type OrderListRelationFilter = {
  every?: InputMaybe<OrderWhereInput>;
  none?: InputMaybe<OrderWhereInput>;
  some?: InputMaybe<OrderWhereInput>;
};

export type OrderMaxAggregate = {
  __typename?: 'OrderMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  itemsPrePrice?: Maybe<Scalars['Float']['output']>;
  itemsPrePricePaymentSessionId?: Maybe<Scalars['String']['output']>;
  itemsPrice?: Maybe<Scalars['Float']['output']>;
  itemsTotalPricePaymentSessionId?: Maybe<Scalars['String']['output']>;
  shippingPrice?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<OrderStatus>;
  taxPrice?: Maybe<Scalars['Float']['output']>;
  totalPrice?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type OrderMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemsPrePrice?: InputMaybe<SortOrder>;
  itemsPrePricePaymentSessionId?: InputMaybe<SortOrder>;
  itemsPrice?: InputMaybe<SortOrder>;
  itemsTotalPricePaymentSessionId?: InputMaybe<SortOrder>;
  shippingPrice?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  taxPrice?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type OrderMinAggregate = {
  __typename?: 'OrderMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  itemsPrePrice?: Maybe<Scalars['Float']['output']>;
  itemsPrePricePaymentSessionId?: Maybe<Scalars['String']['output']>;
  itemsPrice?: Maybe<Scalars['Float']['output']>;
  itemsTotalPricePaymentSessionId?: Maybe<Scalars['String']['output']>;
  shippingPrice?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<OrderStatus>;
  taxPrice?: Maybe<Scalars['Float']['output']>;
  totalPrice?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type OrderMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemsPrePrice?: InputMaybe<SortOrder>;
  itemsPrePricePaymentSessionId?: InputMaybe<SortOrder>;
  itemsPrice?: InputMaybe<SortOrder>;
  itemsTotalPricePaymentSessionId?: InputMaybe<SortOrder>;
  shippingPrice?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  taxPrice?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type OrderOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OrderOrderByWithAggregationInput = {
  _avg?: InputMaybe<OrderAvgOrderByAggregateInput>;
  _count?: InputMaybe<OrderCountOrderByAggregateInput>;
  _max?: InputMaybe<OrderMaxOrderByAggregateInput>;
  _min?: InputMaybe<OrderMinOrderByAggregateInput>;
  _sum?: InputMaybe<OrderSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemsPrePrice?: InputMaybe<SortOrder>;
  itemsPrePricePaymentSessionId?: InputMaybe<SortOrderInput>;
  itemsPrice?: InputMaybe<SortOrder>;
  itemsTotalPricePaymentSessionId?: InputMaybe<SortOrderInput>;
  shippingPrice?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  taxPrice?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type OrderOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemsPrePrice?: InputMaybe<SortOrder>;
  itemsPrePricePaymentSessionId?: InputMaybe<SortOrderInput>;
  itemsPrice?: InputMaybe<SortOrder>;
  itemsTotalPricePaymentSessionId?: InputMaybe<SortOrderInput>;
  orderItem?: InputMaybe<OrderItemOrderByRelationAggregateInput>;
  paymentResult?: InputMaybe<PaymentResultOrderByWithRelationInput>;
  shippingAddress?: InputMaybe<ShippingAddressOrderByWithRelationInput>;
  shippingPrice?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  taxPrice?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type OrderRelationFilter = {
  is?: InputMaybe<OrderWhereInput>;
  isNot?: InputMaybe<OrderWhereInput>;
};

export enum OrderScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  ItemsPrePrice = 'itemsPrePrice',
  ItemsPrePricePaymentSessionId = 'itemsPrePricePaymentSessionId',
  ItemsPrice = 'itemsPrice',
  ItemsTotalPricePaymentSessionId = 'itemsTotalPricePaymentSessionId',
  ShippingPrice = 'shippingPrice',
  Status = 'status',
  TaxPrice = 'taxPrice',
  TotalPrice = 'totalPrice',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type OrderScalarWhereInput = {
  AND?: InputMaybe<Array<OrderScalarWhereInput>>;
  NOT?: InputMaybe<Array<OrderScalarWhereInput>>;
  OR?: InputMaybe<Array<OrderScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  itemsPrePrice?: InputMaybe<FloatFilter>;
  itemsPrePricePaymentSessionId?: InputMaybe<StringNullableFilter>;
  itemsPrice?: InputMaybe<FloatFilter>;
  itemsTotalPricePaymentSessionId?: InputMaybe<StringNullableFilter>;
  shippingPrice?: InputMaybe<FloatFilter>;
  status?: InputMaybe<EnumOrderStatusFilter>;
  taxPrice?: InputMaybe<FloatFilter>;
  totalPrice?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type OrderScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OrderScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OrderScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OrderScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  itemsPrePrice?: InputMaybe<FloatWithAggregatesFilter>;
  itemsPrePricePaymentSessionId?: InputMaybe<StringNullableWithAggregatesFilter>;
  itemsPrice?: InputMaybe<FloatWithAggregatesFilter>;
  itemsTotalPricePaymentSessionId?: InputMaybe<StringNullableWithAggregatesFilter>;
  shippingPrice?: InputMaybe<FloatWithAggregatesFilter>;
  status?: InputMaybe<EnumOrderStatusWithAggregatesFilter>;
  taxPrice?: InputMaybe<FloatWithAggregatesFilter>;
  totalPrice?: InputMaybe<FloatWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export enum OrderStatus {
  BuildCompleted = 'build_completed',
  Building = 'building',
  Done = 'done',
  FullPaymentSuccess = 'full_payment_success',
  OneTimePaymentSuccess = 'one_time_payment_success',
  PendingPrePayment = 'pending_pre_payment',
  PrePaymentPaid = 'pre_payment_paid',
  Shipping = 'shipping'
}

export type OrderSumAggregate = {
  __typename?: 'OrderSumAggregate';
  itemsPrePrice?: Maybe<Scalars['Float']['output']>;
  itemsPrice?: Maybe<Scalars['Float']['output']>;
  shippingPrice?: Maybe<Scalars['Float']['output']>;
  taxPrice?: Maybe<Scalars['Float']['output']>;
  totalPrice?: Maybe<Scalars['Float']['output']>;
};

export type OrderSumOrderByAggregateInput = {
  itemsPrePrice?: InputMaybe<SortOrder>;
  itemsPrice?: InputMaybe<SortOrder>;
  shippingPrice?: InputMaybe<SortOrder>;
  taxPrice?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  itemsPrePrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  itemsPrePricePaymentSessionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  itemsPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  itemsTotalPricePaymentSessionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orderItem?: InputMaybe<OrderItemUpdateManyWithoutOrderNestedInput>;
  paymentResult?: InputMaybe<PaymentResultUpdateOneWithoutOrderNestedInput>;
  shippingAddress?: InputMaybe<ShippingAddressUpdateOneWithoutOrderNestedInput>;
  shippingPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  taxPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutOrdersNestedInput>;
};

export type OrderUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  itemsPrePrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  itemsPrePricePaymentSessionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  itemsPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  itemsTotalPricePaymentSessionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  shippingPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  taxPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderUpdateManyWithWhereWithoutUserInput = {
  data: OrderUpdateManyMutationInput;
  where: OrderScalarWhereInput;
};

export type OrderUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<OrderCreateWithoutUserInput>>;
  createMany?: InputMaybe<OrderCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<OrderWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<OrderUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<OrderUpsertWithWhereUniqueWithoutUserInput>>;
};

export type OrderUpdateOneRequiredWithoutOrderItemNestedInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutOrderItemInput>;
  create?: InputMaybe<OrderCreateWithoutOrderItemInput>;
  update?: InputMaybe<OrderUpdateWithoutOrderItemInput>;
  upsert?: InputMaybe<OrderUpsertWithoutOrderItemInput>;
};

export type OrderUpdateOneRequiredWithoutPaymentResultNestedInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutPaymentResultInput>;
  create?: InputMaybe<OrderCreateWithoutPaymentResultInput>;
  update?: InputMaybe<OrderUpdateWithoutPaymentResultInput>;
  upsert?: InputMaybe<OrderUpsertWithoutPaymentResultInput>;
};

export type OrderUpdateOneRequiredWithoutShippingAddressNestedInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutShippingAddressInput>;
  create?: InputMaybe<OrderCreateWithoutShippingAddressInput>;
  update?: InputMaybe<OrderUpdateWithoutShippingAddressInput>;
  upsert?: InputMaybe<OrderUpsertWithoutShippingAddressInput>;
};

export type OrderUpdateWithWhereUniqueWithoutUserInput = {
  data: OrderUpdateWithoutUserInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateWithoutOrderItemInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  itemsPrePrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  itemsPrePricePaymentSessionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  itemsPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  itemsTotalPricePaymentSessionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  paymentResult?: InputMaybe<PaymentResultUpdateOneWithoutOrderNestedInput>;
  shippingAddress?: InputMaybe<ShippingAddressUpdateOneWithoutOrderNestedInput>;
  shippingPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  taxPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutOrdersNestedInput>;
};

export type OrderUpdateWithoutPaymentResultInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  itemsPrePrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  itemsPrePricePaymentSessionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  itemsPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  itemsTotalPricePaymentSessionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orderItem?: InputMaybe<OrderItemUpdateManyWithoutOrderNestedInput>;
  shippingAddress?: InputMaybe<ShippingAddressUpdateOneWithoutOrderNestedInput>;
  shippingPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  taxPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutOrdersNestedInput>;
};

export type OrderUpdateWithoutShippingAddressInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  itemsPrePrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  itemsPrePricePaymentSessionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  itemsPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  itemsTotalPricePaymentSessionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orderItem?: InputMaybe<OrderItemUpdateManyWithoutOrderNestedInput>;
  paymentResult?: InputMaybe<PaymentResultUpdateOneWithoutOrderNestedInput>;
  shippingPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  taxPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutOrdersNestedInput>;
};

export type OrderUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  itemsPrePrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  itemsPrePricePaymentSessionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  itemsPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  itemsTotalPricePaymentSessionId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orderItem?: InputMaybe<OrderItemUpdateManyWithoutOrderNestedInput>;
  paymentResult?: InputMaybe<PaymentResultUpdateOneWithoutOrderNestedInput>;
  shippingAddress?: InputMaybe<ShippingAddressUpdateOneWithoutOrderNestedInput>;
  shippingPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  taxPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrderUpsertWithWhereUniqueWithoutUserInput = {
  create: OrderCreateWithoutUserInput;
  update: OrderUpdateWithoutUserInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpsertWithoutOrderItemInput = {
  create: OrderCreateWithoutOrderItemInput;
  update: OrderUpdateWithoutOrderItemInput;
};

export type OrderUpsertWithoutPaymentResultInput = {
  create: OrderCreateWithoutPaymentResultInput;
  update: OrderUpdateWithoutPaymentResultInput;
};

export type OrderUpsertWithoutShippingAddressInput = {
  create: OrderCreateWithoutShippingAddressInput;
  update: OrderUpdateWithoutShippingAddressInput;
};

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  itemsPrePrice?: InputMaybe<FloatFilter>;
  itemsPrePricePaymentSessionId?: InputMaybe<StringNullableFilter>;
  itemsPrice?: InputMaybe<FloatFilter>;
  itemsTotalPricePaymentSessionId?: InputMaybe<StringNullableFilter>;
  orderItem?: InputMaybe<OrderItemListRelationFilter>;
  paymentResult?: InputMaybe<PaymentResultRelationFilter>;
  shippingAddress?: InputMaybe<ShippingAddressRelationFilter>;
  shippingPrice?: InputMaybe<FloatFilter>;
  status?: InputMaybe<EnumOrderStatusFilter>;
  taxPrice?: InputMaybe<FloatFilter>;
  totalPrice?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type OrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentResult = {
  __typename?: 'PaymentResult';
  email_address: Scalars['String']['output'];
  id: Scalars['String']['output'];
  order: Order;
  orderId: Scalars['String']['output'];
  status: Scalars['String']['output'];
  update_time: Scalars['String']['output'];
};

export type PaymentResultCountAggregate = {
  __typename?: 'PaymentResultCountAggregate';
  _all: Scalars['Int']['output'];
  email_address: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  orderId: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  update_time: Scalars['Int']['output'];
};

export type PaymentResultCountOrderByAggregateInput = {
  email_address?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  update_time?: InputMaybe<SortOrder>;
};

export type PaymentResultCreateInput = {
  email_address: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  order: OrderCreateNestedOneWithoutPaymentResultInput;
  status: Scalars['String']['input'];
  update_time: Scalars['String']['input'];
};

export type PaymentResultCreateManyInput = {
  email_address: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['String']['input'];
  status: Scalars['String']['input'];
  update_time: Scalars['String']['input'];
};

export type PaymentResultCreateNestedOneWithoutOrderInput = {
  connect?: InputMaybe<PaymentResultWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PaymentResultCreateOrConnectWithoutOrderInput>;
  create?: InputMaybe<PaymentResultCreateWithoutOrderInput>;
};

export type PaymentResultCreateOrConnectWithoutOrderInput = {
  create: PaymentResultCreateWithoutOrderInput;
  where: PaymentResultWhereUniqueInput;
};

export type PaymentResultCreateWithoutOrderInput = {
  email_address: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
  update_time: Scalars['String']['input'];
};

export type PaymentResultGroupBy = {
  __typename?: 'PaymentResultGroupBy';
  _count?: Maybe<PaymentResultCountAggregate>;
  _max?: Maybe<PaymentResultMaxAggregate>;
  _min?: Maybe<PaymentResultMinAggregate>;
  email_address: Scalars['String']['output'];
  id: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
  status: Scalars['String']['output'];
  update_time: Scalars['String']['output'];
};

export type PaymentResultMaxAggregate = {
  __typename?: 'PaymentResultMaxAggregate';
  email_address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  orderId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  update_time?: Maybe<Scalars['String']['output']>;
};

export type PaymentResultMaxOrderByAggregateInput = {
  email_address?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  update_time?: InputMaybe<SortOrder>;
};

export type PaymentResultMinAggregate = {
  __typename?: 'PaymentResultMinAggregate';
  email_address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  orderId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  update_time?: Maybe<Scalars['String']['output']>;
};

export type PaymentResultMinOrderByAggregateInput = {
  email_address?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  update_time?: InputMaybe<SortOrder>;
};

export type PaymentResultOrderByWithAggregationInput = {
  _count?: InputMaybe<PaymentResultCountOrderByAggregateInput>;
  _max?: InputMaybe<PaymentResultMaxOrderByAggregateInput>;
  _min?: InputMaybe<PaymentResultMinOrderByAggregateInput>;
  email_address?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  update_time?: InputMaybe<SortOrder>;
};

export type PaymentResultOrderByWithRelationInput = {
  email_address?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  order?: InputMaybe<OrderOrderByWithRelationInput>;
  orderId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  update_time?: InputMaybe<SortOrder>;
};

export type PaymentResultRelationFilter = {
  is?: InputMaybe<PaymentResultWhereInput>;
  isNot?: InputMaybe<PaymentResultWhereInput>;
};

export enum PaymentResultScalarFieldEnum {
  EmailAddress = 'email_address',
  Id = 'id',
  OrderId = 'orderId',
  Status = 'status',
  UpdateTime = 'update_time'
}

export type PaymentResultScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PaymentResultScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PaymentResultScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PaymentResultScalarWhereWithAggregatesInput>>;
  email_address?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  orderId?: InputMaybe<StringWithAggregatesFilter>;
  status?: InputMaybe<StringWithAggregatesFilter>;
  update_time?: InputMaybe<StringWithAggregatesFilter>;
};

export type PaymentResultUpdateInput = {
  email_address?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<OrderUpdateOneRequiredWithoutPaymentResultNestedInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  update_time?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PaymentResultUpdateManyMutationInput = {
  email_address?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  update_time?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PaymentResultUpdateOneWithoutOrderNestedInput = {
  connect?: InputMaybe<PaymentResultWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PaymentResultCreateOrConnectWithoutOrderInput>;
  create?: InputMaybe<PaymentResultCreateWithoutOrderInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<PaymentResultUpdateWithoutOrderInput>;
  upsert?: InputMaybe<PaymentResultUpsertWithoutOrderInput>;
};

export type PaymentResultUpdateWithoutOrderInput = {
  email_address?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  update_time?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PaymentResultUpsertWithoutOrderInput = {
  create: PaymentResultCreateWithoutOrderInput;
  update: PaymentResultUpdateWithoutOrderInput;
};

export type PaymentResultWhereInput = {
  AND?: InputMaybe<Array<PaymentResultWhereInput>>;
  NOT?: InputMaybe<Array<PaymentResultWhereInput>>;
  OR?: InputMaybe<Array<PaymentResultWhereInput>>;
  email_address?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderRelationFilter>;
  orderId?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  update_time?: InputMaybe<StringFilter>;
};

export type PaymentResultWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
};

export type Product = {
  __typename?: 'Product';
  _count?: Maybe<ProductCount>;
  cartItem: Array<CartItem>;
  category: Category;
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  custom_product_status: CustomProductStatus;
  description: Scalars['String']['output'];
  employee?: Maybe<Employee>;
  employeeId?: Maybe<Scalars['String']['output']>;
  fetaures: Array<ProductFetaure>;
  fetauresCategories: Array<FetaureCategory>;
  id: Scalars['String']['output'];
  images: Array<Scalars['String']['output']>;
  minimumOrderNeededToStart: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  orderItem: Array<OrderItem>;
  orderStartPrice?: Maybe<Scalars['Float']['output']>;
  price: Scalars['Float']['output'];
  reveiws: Array<Review>;
  shortdescription: Scalars['String']['output'];
  sizes: Array<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  stock: Scalars['Int']['output'];
  type: ProductType;
  updatedAt: Scalars['DateTime']['output'];
};


export type ProductCartItemArgs = {
  cursor?: InputMaybe<CartItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<CartItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CartItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CartItemWhereInput>;
};


export type ProductFetauresArgs = {
  cursor?: InputMaybe<ProductFetaureWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductFetaureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductFetaureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFetaureWhereInput>;
};


export type ProductFetauresCategoriesArgs = {
  cursor?: InputMaybe<FetaureCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<FetaureCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FetaureCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FetaureCategoryWhereInput>;
};


export type ProductOrderItemArgs = {
  cursor?: InputMaybe<OrderItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderItemWhereInput>;
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
  minimumOrderNeededToStart?: Maybe<Scalars['Float']['output']>;
  orderStartPrice?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  stock?: Maybe<Scalars['Float']['output']>;
};

export type ProductAvgOrderByAggregateInput = {
  minimumOrderNeededToStart?: InputMaybe<SortOrder>;
  orderStartPrice?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  stock?: InputMaybe<SortOrder>;
};

export type ProductCount = {
  __typename?: 'ProductCount';
  cartItem: Scalars['Int']['output'];
  fetaures: Scalars['Int']['output'];
  fetauresCategories: Scalars['Int']['output'];
  orderItem: Scalars['Int']['output'];
  reveiws: Scalars['Int']['output'];
};


export type ProductCountCartItemArgs = {
  where?: InputMaybe<CartItemWhereInput>;
};


export type ProductCountFetauresArgs = {
  where?: InputMaybe<ProductFetaureWhereInput>;
};


export type ProductCountFetauresCategoriesArgs = {
  where?: InputMaybe<FetaureCategoryWhereInput>;
};


export type ProductCountOrderItemArgs = {
  where?: InputMaybe<OrderItemWhereInput>;
};


export type ProductCountReveiwsArgs = {
  where?: InputMaybe<ReviewWhereInput>;
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int']['output'];
  categoryId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  custom_product_status: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  employeeId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  images: Scalars['Int']['output'];
  minimumOrderNeededToStart: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  orderStartPrice: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
  shortdescription: Scalars['Int']['output'];
  sizes: Scalars['Int']['output'];
  slug: Scalars['Int']['output'];
  stock: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ProductCountOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  custom_product_status?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  employeeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  minimumOrderNeededToStart?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  orderStartPrice?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  shortdescription?: InputMaybe<SortOrder>;
  sizes?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  stock?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductCreateInput = {
  cartItem?: InputMaybe<CartItemCreateNestedManyWithoutProductInput>;
  category: CategoryCreateNestedOneWithoutProductsInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom_product_status: CustomProductStatus;
  description: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedOneWithoutProductsInput>;
  fetaures?: InputMaybe<ProductFetaureCreateNestedManyWithoutProductInput>;
  fetauresCategories?: InputMaybe<FetaureCategoryCreateNestedManyWithoutProductsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  minimumOrderNeededToStart: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  orderItem?: InputMaybe<OrderItemCreateNestedManyWithoutProductInput>;
  orderStartPrice?: InputMaybe<Scalars['Float']['input']>;
  price: Scalars['Float']['input'];
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutProductInput>;
  shortdescription?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<ProductCreatesizesInput>;
  slug: Scalars['String']['input'];
  stock?: InputMaybe<Scalars['Int']['input']>;
  type: ProductType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateManyCategoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom_product_status: CustomProductStatus;
  description: Scalars['String']['input'];
  employeeId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  minimumOrderNeededToStart: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  orderStartPrice?: InputMaybe<Scalars['Float']['input']>;
  price: Scalars['Float']['input'];
  shortdescription?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<ProductCreatesizesInput>;
  slug: Scalars['String']['input'];
  stock?: InputMaybe<Scalars['Int']['input']>;
  type: ProductType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateManyCategoryInputEnvelope = {
  data: Array<ProductCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductCreateManyEmployeeInput = {
  categoryId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom_product_status: CustomProductStatus;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  minimumOrderNeededToStart: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  orderStartPrice?: InputMaybe<Scalars['Float']['input']>;
  price: Scalars['Float']['input'];
  shortdescription?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<ProductCreatesizesInput>;
  slug: Scalars['String']['input'];
  stock?: InputMaybe<Scalars['Int']['input']>;
  type: ProductType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateManyEmployeeInputEnvelope = {
  data: Array<ProductCreateManyEmployeeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductCreateManyInput = {
  categoryId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom_product_status: CustomProductStatus;
  description: Scalars['String']['input'];
  employeeId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  minimumOrderNeededToStart: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  orderStartPrice?: InputMaybe<Scalars['Float']['input']>;
  price: Scalars['Float']['input'];
  shortdescription?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<ProductCreatesizesInput>;
  slug: Scalars['String']['input'];
  stock?: InputMaybe<Scalars['Int']['input']>;
  type: ProductType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<ProductCreateManyCategoryInputEnvelope>;
};

export type ProductCreateNestedManyWithoutEmployeeInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutEmployeeInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutEmployeeInput>>;
  createMany?: InputMaybe<ProductCreateManyEmployeeInputEnvelope>;
};

export type ProductCreateNestedManyWithoutFetauresCategoriesInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutFetauresCategoriesInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutFetauresCategoriesInput>>;
};

export type ProductCreateNestedOneWithoutCartItemInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutCartItemInput>;
  create?: InputMaybe<ProductCreateWithoutCartItemInput>;
};

export type ProductCreateNestedOneWithoutFetauresInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutFetauresInput>;
  create?: InputMaybe<ProductCreateWithoutFetauresInput>;
};

export type ProductCreateNestedOneWithoutOrderItemInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutOrderItemInput>;
  create?: InputMaybe<ProductCreateWithoutOrderItemInput>;
};

export type ProductCreateNestedOneWithoutReveiwsInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutReveiwsInput>;
  create?: InputMaybe<ProductCreateWithoutReveiwsInput>;
};

export type ProductCreateOrConnectWithoutCartItemInput = {
  create: ProductCreateWithoutCartItemInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutCategoryInput = {
  create: ProductCreateWithoutCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutEmployeeInput = {
  create: ProductCreateWithoutEmployeeInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutFetauresCategoriesInput = {
  create: ProductCreateWithoutFetauresCategoriesInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutFetauresInput = {
  create: ProductCreateWithoutFetauresInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutOrderItemInput = {
  create: ProductCreateWithoutOrderItemInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutReveiwsInput = {
  create: ProductCreateWithoutReveiwsInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutCartItemInput = {
  category: CategoryCreateNestedOneWithoutProductsInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom_product_status: CustomProductStatus;
  description: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedOneWithoutProductsInput>;
  fetaures?: InputMaybe<ProductFetaureCreateNestedManyWithoutProductInput>;
  fetauresCategories?: InputMaybe<FetaureCategoryCreateNestedManyWithoutProductsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  minimumOrderNeededToStart: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  orderItem?: InputMaybe<OrderItemCreateNestedManyWithoutProductInput>;
  orderStartPrice?: InputMaybe<Scalars['Float']['input']>;
  price: Scalars['Float']['input'];
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutProductInput>;
  shortdescription?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<ProductCreatesizesInput>;
  slug: Scalars['String']['input'];
  stock?: InputMaybe<Scalars['Int']['input']>;
  type: ProductType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateWithoutCategoryInput = {
  cartItem?: InputMaybe<CartItemCreateNestedManyWithoutProductInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom_product_status: CustomProductStatus;
  description: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedOneWithoutProductsInput>;
  fetaures?: InputMaybe<ProductFetaureCreateNestedManyWithoutProductInput>;
  fetauresCategories?: InputMaybe<FetaureCategoryCreateNestedManyWithoutProductsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  minimumOrderNeededToStart: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  orderItem?: InputMaybe<OrderItemCreateNestedManyWithoutProductInput>;
  orderStartPrice?: InputMaybe<Scalars['Float']['input']>;
  price: Scalars['Float']['input'];
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutProductInput>;
  shortdescription?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<ProductCreatesizesInput>;
  slug: Scalars['String']['input'];
  stock?: InputMaybe<Scalars['Int']['input']>;
  type: ProductType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateWithoutEmployeeInput = {
  cartItem?: InputMaybe<CartItemCreateNestedManyWithoutProductInput>;
  category: CategoryCreateNestedOneWithoutProductsInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom_product_status: CustomProductStatus;
  description: Scalars['String']['input'];
  fetaures?: InputMaybe<ProductFetaureCreateNestedManyWithoutProductInput>;
  fetauresCategories?: InputMaybe<FetaureCategoryCreateNestedManyWithoutProductsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  minimumOrderNeededToStart: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  orderItem?: InputMaybe<OrderItemCreateNestedManyWithoutProductInput>;
  orderStartPrice?: InputMaybe<Scalars['Float']['input']>;
  price: Scalars['Float']['input'];
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutProductInput>;
  shortdescription?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<ProductCreatesizesInput>;
  slug: Scalars['String']['input'];
  stock?: InputMaybe<Scalars['Int']['input']>;
  type: ProductType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateWithoutFetauresCategoriesInput = {
  cartItem?: InputMaybe<CartItemCreateNestedManyWithoutProductInput>;
  category: CategoryCreateNestedOneWithoutProductsInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom_product_status: CustomProductStatus;
  description: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedOneWithoutProductsInput>;
  fetaures?: InputMaybe<ProductFetaureCreateNestedManyWithoutProductInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  minimumOrderNeededToStart: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  orderItem?: InputMaybe<OrderItemCreateNestedManyWithoutProductInput>;
  orderStartPrice?: InputMaybe<Scalars['Float']['input']>;
  price: Scalars['Float']['input'];
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutProductInput>;
  shortdescription?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<ProductCreatesizesInput>;
  slug: Scalars['String']['input'];
  stock?: InputMaybe<Scalars['Int']['input']>;
  type: ProductType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateWithoutFetauresInput = {
  cartItem?: InputMaybe<CartItemCreateNestedManyWithoutProductInput>;
  category: CategoryCreateNestedOneWithoutProductsInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom_product_status: CustomProductStatus;
  description: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedOneWithoutProductsInput>;
  fetauresCategories?: InputMaybe<FetaureCategoryCreateNestedManyWithoutProductsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  minimumOrderNeededToStart: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  orderItem?: InputMaybe<OrderItemCreateNestedManyWithoutProductInput>;
  orderStartPrice?: InputMaybe<Scalars['Float']['input']>;
  price: Scalars['Float']['input'];
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutProductInput>;
  shortdescription?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<ProductCreatesizesInput>;
  slug: Scalars['String']['input'];
  stock?: InputMaybe<Scalars['Int']['input']>;
  type: ProductType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateWithoutOrderItemInput = {
  cartItem?: InputMaybe<CartItemCreateNestedManyWithoutProductInput>;
  category: CategoryCreateNestedOneWithoutProductsInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom_product_status: CustomProductStatus;
  description: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedOneWithoutProductsInput>;
  fetaures?: InputMaybe<ProductFetaureCreateNestedManyWithoutProductInput>;
  fetauresCategories?: InputMaybe<FetaureCategoryCreateNestedManyWithoutProductsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  minimumOrderNeededToStart: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  orderStartPrice?: InputMaybe<Scalars['Float']['input']>;
  price: Scalars['Float']['input'];
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutProductInput>;
  shortdescription?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<ProductCreatesizesInput>;
  slug: Scalars['String']['input'];
  stock?: InputMaybe<Scalars['Int']['input']>;
  type: ProductType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateWithoutReveiwsInput = {
  cartItem?: InputMaybe<CartItemCreateNestedManyWithoutProductInput>;
  category: CategoryCreateNestedOneWithoutProductsInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom_product_status: CustomProductStatus;
  description: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedOneWithoutProductsInput>;
  fetaures?: InputMaybe<ProductFetaureCreateNestedManyWithoutProductInput>;
  fetauresCategories?: InputMaybe<FetaureCategoryCreateNestedManyWithoutProductsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  minimumOrderNeededToStart: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  orderItem?: InputMaybe<OrderItemCreateNestedManyWithoutProductInput>;
  orderStartPrice?: InputMaybe<Scalars['Float']['input']>;
  price: Scalars['Float']['input'];
  shortdescription?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<ProductCreatesizesInput>;
  slug: Scalars['String']['input'];
  stock?: InputMaybe<Scalars['Int']['input']>;
  type: ProductType;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateimagesInput = {
  set: Array<Scalars['String']['input']>;
};

export type ProductCreatesizesInput = {
  set: Array<Scalars['String']['input']>;
};

export type ProductFetaure = {
  __typename?: 'ProductFetaure';
  fetaureCategory: FetaureCategory;
  fetaurecategoryId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  product: Product;
  productId: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ProductFetaureCountAggregate = {
  __typename?: 'ProductFetaureCountAggregate';
  _all: Scalars['Int']['output'];
  fetaurecategoryId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  productId: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type ProductFetaureCountOrderByAggregateInput = {
  fetaurecategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ProductFetaureCreateInput = {
  fetaureCategory: FetaureCategoryCreateNestedOneWithoutFetauresInput;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  product: ProductCreateNestedOneWithoutFetauresInput;
  value: Scalars['String']['input'];
};

export type ProductFetaureCreateManyFetaureCategoryInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ProductFetaureCreateManyFetaureCategoryInputEnvelope = {
  data: Array<ProductFetaureCreateManyFetaureCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductFetaureCreateManyInput = {
  fetaurecategoryId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ProductFetaureCreateManyProductInput = {
  fetaurecategoryId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ProductFetaureCreateManyProductInputEnvelope = {
  data: Array<ProductFetaureCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductFetaureCreateNestedManyWithoutFetaureCategoryInput = {
  connect?: InputMaybe<Array<ProductFetaureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductFetaureCreateOrConnectWithoutFetaureCategoryInput>>;
  create?: InputMaybe<Array<ProductFetaureCreateWithoutFetaureCategoryInput>>;
  createMany?: InputMaybe<ProductFetaureCreateManyFetaureCategoryInputEnvelope>;
};

export type ProductFetaureCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<ProductFetaureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductFetaureCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductFetaureCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductFetaureCreateManyProductInputEnvelope>;
};

export type ProductFetaureCreateOrConnectWithoutFetaureCategoryInput = {
  create: ProductFetaureCreateWithoutFetaureCategoryInput;
  where: ProductFetaureWhereUniqueInput;
};

export type ProductFetaureCreateOrConnectWithoutProductInput = {
  create: ProductFetaureCreateWithoutProductInput;
  where: ProductFetaureWhereUniqueInput;
};

export type ProductFetaureCreateWithoutFetaureCategoryInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  product: ProductCreateNestedOneWithoutFetauresInput;
  value: Scalars['String']['input'];
};

export type ProductFetaureCreateWithoutProductInput = {
  fetaureCategory: FetaureCategoryCreateNestedOneWithoutFetauresInput;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ProductFetaureGroupBy = {
  __typename?: 'ProductFetaureGroupBy';
  _count?: Maybe<ProductFetaureCountAggregate>;
  _max?: Maybe<ProductFetaureMaxAggregate>;
  _min?: Maybe<ProductFetaureMinAggregate>;
  fetaurecategoryId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ProductFetaureListRelationFilter = {
  every?: InputMaybe<ProductFetaureWhereInput>;
  none?: InputMaybe<ProductFetaureWhereInput>;
  some?: InputMaybe<ProductFetaureWhereInput>;
};

export type ProductFetaureMaxAggregate = {
  __typename?: 'ProductFetaureMaxAggregate';
  fetaurecategoryId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ProductFetaureMaxOrderByAggregateInput = {
  fetaurecategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ProductFetaureMinAggregate = {
  __typename?: 'ProductFetaureMinAggregate';
  fetaurecategoryId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ProductFetaureMinOrderByAggregateInput = {
  fetaurecategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ProductFetaureOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductFetaureOrderByWithAggregationInput = {
  _count?: InputMaybe<ProductFetaureCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductFetaureMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductFetaureMinOrderByAggregateInput>;
  fetaurecategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type ProductFetaureOrderByWithRelationInput = {
  fetaureCategory?: InputMaybe<FetaureCategoryOrderByWithRelationInput>;
  fetaurecategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum ProductFetaureScalarFieldEnum {
  FetaurecategoryId = 'fetaurecategoryId',
  Id = 'id',
  Name = 'name',
  ProductId = 'productId',
  Value = 'value'
}

export type ProductFetaureScalarWhereInput = {
  AND?: InputMaybe<Array<ProductFetaureScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductFetaureScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductFetaureScalarWhereInput>>;
  fetaurecategoryId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type ProductFetaureScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProductFetaureScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductFetaureScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductFetaureScalarWhereWithAggregatesInput>>;
  fetaurecategoryId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  productId?: InputMaybe<StringWithAggregatesFilter>;
  value?: InputMaybe<StringWithAggregatesFilter>;
};

export type ProductFetaureUpdateInput = {
  fetaureCategory?: InputMaybe<FetaureCategoryUpdateOneRequiredWithoutFetauresNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutFetauresNestedInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProductFetaureUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProductFetaureUpdateManyWithWhereWithoutFetaureCategoryInput = {
  data: ProductFetaureUpdateManyMutationInput;
  where: ProductFetaureScalarWhereInput;
};

export type ProductFetaureUpdateManyWithWhereWithoutProductInput = {
  data: ProductFetaureUpdateManyMutationInput;
  where: ProductFetaureScalarWhereInput;
};

export type ProductFetaureUpdateManyWithoutFetaureCategoryNestedInput = {
  connect?: InputMaybe<Array<ProductFetaureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductFetaureCreateOrConnectWithoutFetaureCategoryInput>>;
  create?: InputMaybe<Array<ProductFetaureCreateWithoutFetaureCategoryInput>>;
  createMany?: InputMaybe<ProductFetaureCreateManyFetaureCategoryInputEnvelope>;
  delete?: InputMaybe<Array<ProductFetaureWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductFetaureScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductFetaureWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductFetaureWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductFetaureUpdateWithWhereUniqueWithoutFetaureCategoryInput>>;
  updateMany?: InputMaybe<Array<ProductFetaureUpdateManyWithWhereWithoutFetaureCategoryInput>>;
  upsert?: InputMaybe<Array<ProductFetaureUpsertWithWhereUniqueWithoutFetaureCategoryInput>>;
};

export type ProductFetaureUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<ProductFetaureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductFetaureCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ProductFetaureCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductFetaureCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<ProductFetaureWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductFetaureScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductFetaureWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductFetaureWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductFetaureUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<ProductFetaureUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<ProductFetaureUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ProductFetaureUpdateWithWhereUniqueWithoutFetaureCategoryInput = {
  data: ProductFetaureUpdateWithoutFetaureCategoryInput;
  where: ProductFetaureWhereUniqueInput;
};

export type ProductFetaureUpdateWithWhereUniqueWithoutProductInput = {
  data: ProductFetaureUpdateWithoutProductInput;
  where: ProductFetaureWhereUniqueInput;
};

export type ProductFetaureUpdateWithoutFetaureCategoryInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutFetauresNestedInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProductFetaureUpdateWithoutProductInput = {
  fetaureCategory?: InputMaybe<FetaureCategoryUpdateOneRequiredWithoutFetauresNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProductFetaureUpsertWithWhereUniqueWithoutFetaureCategoryInput = {
  create: ProductFetaureCreateWithoutFetaureCategoryInput;
  update: ProductFetaureUpdateWithoutFetaureCategoryInput;
  where: ProductFetaureWhereUniqueInput;
};

export type ProductFetaureUpsertWithWhereUniqueWithoutProductInput = {
  create: ProductFetaureCreateWithoutProductInput;
  update: ProductFetaureUpdateWithoutProductInput;
  where: ProductFetaureWhereUniqueInput;
};

export type ProductFetaureWhereInput = {
  AND?: InputMaybe<Array<ProductFetaureWhereInput>>;
  NOT?: InputMaybe<Array<ProductFetaureWhereInput>>;
  OR?: InputMaybe<Array<ProductFetaureWhereInput>>;
  fetaureCategory?: InputMaybe<FetaureCategoryRelationFilter>;
  fetaurecategoryId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type ProductFetaureWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
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
  custom_product_status: CustomProductStatus;
  description: Scalars['String']['output'];
  employeeId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  minimumOrderNeededToStart: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  orderStartPrice?: Maybe<Scalars['Float']['output']>;
  price: Scalars['Float']['output'];
  shortdescription: Scalars['String']['output'];
  sizes?: Maybe<Array<Scalars['String']['output']>>;
  slug: Scalars['String']['output'];
  stock: Scalars['Int']['output'];
  type: ProductType;
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
  custom_product_status?: Maybe<CustomProductStatus>;
  description?: Maybe<Scalars['String']['output']>;
  employeeId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  minimumOrderNeededToStart?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orderStartPrice?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  shortdescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  stock?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<ProductType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductMaxOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  custom_product_status?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  employeeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  minimumOrderNeededToStart?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  orderStartPrice?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  shortdescription?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  stock?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  custom_product_status?: Maybe<CustomProductStatus>;
  description?: Maybe<Scalars['String']['output']>;
  employeeId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  minimumOrderNeededToStart?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orderStartPrice?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  shortdescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  stock?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<ProductType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductMinOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  custom_product_status?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  employeeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  minimumOrderNeededToStart?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  orderStartPrice?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  shortdescription?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  stock?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
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
  custom_product_status?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  employeeId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  minimumOrderNeededToStart?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  orderStartPrice?: InputMaybe<SortOrderInput>;
  price?: InputMaybe<SortOrder>;
  shortdescription?: InputMaybe<SortOrder>;
  sizes?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  stock?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  cartItem?: InputMaybe<CartItemOrderByRelationAggregateInput>;
  category?: InputMaybe<CategoryOrderByWithRelationInput>;
  categoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  custom_product_status?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  employee?: InputMaybe<EmployeeOrderByWithRelationInput>;
  employeeId?: InputMaybe<SortOrderInput>;
  fetaures?: InputMaybe<ProductFetaureOrderByRelationAggregateInput>;
  fetauresCategories?: InputMaybe<FetaureCategoryOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  minimumOrderNeededToStart?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  orderItem?: InputMaybe<OrderItemOrderByRelationAggregateInput>;
  orderStartPrice?: InputMaybe<SortOrderInput>;
  price?: InputMaybe<SortOrder>;
  reveiws?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  shortdescription?: InputMaybe<SortOrder>;
  sizes?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  stock?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductRelationFilter = {
  is?: InputMaybe<ProductWhereInput>;
  isNot?: InputMaybe<ProductWhereInput>;
};

export enum ProductScalarFieldEnum {
  CategoryId = 'categoryId',
  CreatedAt = 'createdAt',
  CustomProductStatus = 'custom_product_status',
  Description = 'description',
  EmployeeId = 'employeeId',
  Id = 'id',
  Images = 'images',
  MinimumOrderNeededToStart = 'minimumOrderNeededToStart',
  Name = 'name',
  OrderStartPrice = 'orderStartPrice',
  Price = 'price',
  Shortdescription = 'shortdescription',
  Sizes = 'sizes',
  Slug = 'slug',
  Stock = 'stock',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type ProductScalarWhereInput = {
  AND?: InputMaybe<Array<ProductScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereInput>>;
  categoryId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  custom_product_status?: InputMaybe<EnumCustomProductStatusFilter>;
  description?: InputMaybe<StringFilter>;
  employeeId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  images?: InputMaybe<StringNullableListFilter>;
  minimumOrderNeededToStart?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  orderStartPrice?: InputMaybe<FloatNullableFilter>;
  price?: InputMaybe<FloatFilter>;
  shortdescription?: InputMaybe<StringFilter>;
  sizes?: InputMaybe<StringNullableListFilter>;
  slug?: InputMaybe<StringFilter>;
  stock?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumProductTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  categoryId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  custom_product_status?: InputMaybe<EnumCustomProductStatusWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  employeeId?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  images?: InputMaybe<StringNullableListFilter>;
  minimumOrderNeededToStart?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  orderStartPrice?: InputMaybe<FloatNullableWithAggregatesFilter>;
  price?: InputMaybe<FloatWithAggregatesFilter>;
  shortdescription?: InputMaybe<StringWithAggregatesFilter>;
  sizes?: InputMaybe<StringNullableListFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
  stock?: InputMaybe<IntWithAggregatesFilter>;
  type?: InputMaybe<EnumProductTypeWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  minimumOrderNeededToStart?: Maybe<Scalars['Int']['output']>;
  orderStartPrice?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  stock?: Maybe<Scalars['Int']['output']>;
};

export type ProductSumOrderByAggregateInput = {
  minimumOrderNeededToStart?: InputMaybe<SortOrder>;
  orderStartPrice?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  stock?: InputMaybe<SortOrder>;
};

export enum ProductType {
  Custom = 'custom',
  ReadyMate = 'readyMate'
}

export type ProductUpdateInput = {
  cartItem?: InputMaybe<CartItemUpdateManyWithoutProductNestedInput>;
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutProductsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  custom_product_status?: InputMaybe<EnumCustomProductStatusFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateOneWithoutProductsNestedInput>;
  fetaures?: InputMaybe<ProductFetaureUpdateManyWithoutProductNestedInput>;
  fetauresCategories?: InputMaybe<FetaureCategoryUpdateManyWithoutProductsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  minimumOrderNeededToStart?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderItem?: InputMaybe<OrderItemUpdateManyWithoutProductNestedInput>;
  orderStartPrice?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutProductNestedInput>;
  shortdescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  sizes?: InputMaybe<ProductUpdatesizesInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  stock?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  custom_product_status?: InputMaybe<EnumCustomProductStatusFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  minimumOrderNeededToStart?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderStartPrice?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  shortdescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  sizes?: InputMaybe<ProductUpdatesizesInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  stock?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateManyWithWhereWithoutCategoryInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithWhereWithoutEmployeeInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithWhereWithoutFetauresCategoriesInput = {
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

export type ProductUpdateManyWithoutEmployeeNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutEmployeeInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutEmployeeInput>>;
  createMany?: InputMaybe<ProductCreateManyEmployeeInputEnvelope>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutEmployeeInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutEmployeeInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutEmployeeInput>>;
};

export type ProductUpdateManyWithoutFetauresCategoriesNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutFetauresCategoriesInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutFetauresCategoriesInput>>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutFetauresCategoriesInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutFetauresCategoriesInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutFetauresCategoriesInput>>;
};

export type ProductUpdateOneRequiredWithoutCartItemNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutCartItemInput>;
  create?: InputMaybe<ProductCreateWithoutCartItemInput>;
  update?: InputMaybe<ProductUpdateWithoutCartItemInput>;
  upsert?: InputMaybe<ProductUpsertWithoutCartItemInput>;
};

export type ProductUpdateOneRequiredWithoutFetauresNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutFetauresInput>;
  create?: InputMaybe<ProductCreateWithoutFetauresInput>;
  update?: InputMaybe<ProductUpdateWithoutFetauresInput>;
  upsert?: InputMaybe<ProductUpsertWithoutFetauresInput>;
};

export type ProductUpdateOneRequiredWithoutOrderItemNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutOrderItemInput>;
  create?: InputMaybe<ProductCreateWithoutOrderItemInput>;
  update?: InputMaybe<ProductUpdateWithoutOrderItemInput>;
  upsert?: InputMaybe<ProductUpsertWithoutOrderItemInput>;
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

export type ProductUpdateWithWhereUniqueWithoutEmployeeInput = {
  data: ProductUpdateWithoutEmployeeInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithWhereUniqueWithoutFetauresCategoriesInput = {
  data: ProductUpdateWithoutFetauresCategoriesInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithoutCartItemInput = {
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutProductsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  custom_product_status?: InputMaybe<EnumCustomProductStatusFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateOneWithoutProductsNestedInput>;
  fetaures?: InputMaybe<ProductFetaureUpdateManyWithoutProductNestedInput>;
  fetauresCategories?: InputMaybe<FetaureCategoryUpdateManyWithoutProductsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  minimumOrderNeededToStart?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderItem?: InputMaybe<OrderItemUpdateManyWithoutProductNestedInput>;
  orderStartPrice?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutProductNestedInput>;
  shortdescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  sizes?: InputMaybe<ProductUpdatesizesInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  stock?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutCategoryInput = {
  cartItem?: InputMaybe<CartItemUpdateManyWithoutProductNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  custom_product_status?: InputMaybe<EnumCustomProductStatusFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateOneWithoutProductsNestedInput>;
  fetaures?: InputMaybe<ProductFetaureUpdateManyWithoutProductNestedInput>;
  fetauresCategories?: InputMaybe<FetaureCategoryUpdateManyWithoutProductsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  minimumOrderNeededToStart?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderItem?: InputMaybe<OrderItemUpdateManyWithoutProductNestedInput>;
  orderStartPrice?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutProductNestedInput>;
  shortdescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  sizes?: InputMaybe<ProductUpdatesizesInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  stock?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutEmployeeInput = {
  cartItem?: InputMaybe<CartItemUpdateManyWithoutProductNestedInput>;
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutProductsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  custom_product_status?: InputMaybe<EnumCustomProductStatusFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  fetaures?: InputMaybe<ProductFetaureUpdateManyWithoutProductNestedInput>;
  fetauresCategories?: InputMaybe<FetaureCategoryUpdateManyWithoutProductsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  minimumOrderNeededToStart?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderItem?: InputMaybe<OrderItemUpdateManyWithoutProductNestedInput>;
  orderStartPrice?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutProductNestedInput>;
  shortdescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  sizes?: InputMaybe<ProductUpdatesizesInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  stock?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutFetauresCategoriesInput = {
  cartItem?: InputMaybe<CartItemUpdateManyWithoutProductNestedInput>;
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutProductsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  custom_product_status?: InputMaybe<EnumCustomProductStatusFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateOneWithoutProductsNestedInput>;
  fetaures?: InputMaybe<ProductFetaureUpdateManyWithoutProductNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  minimumOrderNeededToStart?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderItem?: InputMaybe<OrderItemUpdateManyWithoutProductNestedInput>;
  orderStartPrice?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutProductNestedInput>;
  shortdescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  sizes?: InputMaybe<ProductUpdatesizesInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  stock?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutFetauresInput = {
  cartItem?: InputMaybe<CartItemUpdateManyWithoutProductNestedInput>;
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutProductsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  custom_product_status?: InputMaybe<EnumCustomProductStatusFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateOneWithoutProductsNestedInput>;
  fetauresCategories?: InputMaybe<FetaureCategoryUpdateManyWithoutProductsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  minimumOrderNeededToStart?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderItem?: InputMaybe<OrderItemUpdateManyWithoutProductNestedInput>;
  orderStartPrice?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutProductNestedInput>;
  shortdescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  sizes?: InputMaybe<ProductUpdatesizesInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  stock?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutOrderItemInput = {
  cartItem?: InputMaybe<CartItemUpdateManyWithoutProductNestedInput>;
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutProductsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  custom_product_status?: InputMaybe<EnumCustomProductStatusFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateOneWithoutProductsNestedInput>;
  fetaures?: InputMaybe<ProductFetaureUpdateManyWithoutProductNestedInput>;
  fetauresCategories?: InputMaybe<FetaureCategoryUpdateManyWithoutProductsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  minimumOrderNeededToStart?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderStartPrice?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutProductNestedInput>;
  shortdescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  sizes?: InputMaybe<ProductUpdatesizesInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  stock?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutReveiwsInput = {
  cartItem?: InputMaybe<CartItemUpdateManyWithoutProductNestedInput>;
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutProductsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  custom_product_status?: InputMaybe<EnumCustomProductStatusFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateOneWithoutProductsNestedInput>;
  fetaures?: InputMaybe<ProductFetaureUpdateManyWithoutProductNestedInput>;
  fetauresCategories?: InputMaybe<FetaureCategoryUpdateManyWithoutProductsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  minimumOrderNeededToStart?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  orderItem?: InputMaybe<OrderItemUpdateManyWithoutProductNestedInput>;
  orderStartPrice?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  shortdescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  sizes?: InputMaybe<ProductUpdatesizesInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  stock?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateimagesInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProductUpdatesizesInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
  create: ProductCreateWithoutCategoryInput;
  update: ProductUpdateWithoutCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithWhereUniqueWithoutEmployeeInput = {
  create: ProductCreateWithoutEmployeeInput;
  update: ProductUpdateWithoutEmployeeInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithWhereUniqueWithoutFetauresCategoriesInput = {
  create: ProductCreateWithoutFetauresCategoriesInput;
  update: ProductUpdateWithoutFetauresCategoriesInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithoutCartItemInput = {
  create: ProductCreateWithoutCartItemInput;
  update: ProductUpdateWithoutCartItemInput;
};

export type ProductUpsertWithoutFetauresInput = {
  create: ProductCreateWithoutFetauresInput;
  update: ProductUpdateWithoutFetauresInput;
};

export type ProductUpsertWithoutOrderItemInput = {
  create: ProductCreateWithoutOrderItemInput;
  update: ProductUpdateWithoutOrderItemInput;
};

export type ProductUpsertWithoutReveiwsInput = {
  create: ProductCreateWithoutReveiwsInput;
  update: ProductUpdateWithoutReveiwsInput;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  cartItem?: InputMaybe<CartItemListRelationFilter>;
  category?: InputMaybe<CategoryRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  custom_product_status?: InputMaybe<EnumCustomProductStatusFilter>;
  description?: InputMaybe<StringFilter>;
  employee?: InputMaybe<EmployeeRelationFilter>;
  employeeId?: InputMaybe<StringNullableFilter>;
  fetaures?: InputMaybe<ProductFetaureListRelationFilter>;
  fetauresCategories?: InputMaybe<FetaureCategoryListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  images?: InputMaybe<StringNullableListFilter>;
  minimumOrderNeededToStart?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  orderItem?: InputMaybe<OrderItemListRelationFilter>;
  orderStartPrice?: InputMaybe<FloatNullableFilter>;
  price?: InputMaybe<FloatFilter>;
  reveiws?: InputMaybe<ReviewListRelationFilter>;
  shortdescription?: InputMaybe<StringFilter>;
  sizes?: InputMaybe<StringNullableListFilter>;
  slug?: InputMaybe<StringFilter>;
  stock?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumProductTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCart: AggregateCart;
  aggregateCartItem: AggregateCartItem;
  aggregateCategory: AggregateCategory;
  aggregateDefaultShippingAdress: AggregateDefaultShippingAdress;
  aggregateEmployee: AggregateEmployee;
  aggregateEmployeeCategory: AggregateEmployeeCategory;
  aggregateEmployeeSubCategory: AggregateEmployeeSubCategory;
  aggregateFetaureCategory: AggregateFetaureCategory;
  aggregateMainCategory: AggregateMainCategory;
  aggregateOrder: AggregateOrder;
  aggregateOrderItem: AggregateOrderItem;
  aggregatePaymentResult: AggregatePaymentResult;
  aggregateProduct: AggregateProduct;
  aggregateProductFetaure: AggregateProductFetaure;
  aggregateReview: AggregateReview;
  aggregateShippingAddress: AggregateShippingAddress;
  aggregateUser: AggregateUser;
  aggregateUserTokens: AggregateUserTokens;
  cart?: Maybe<Cart>;
  cartItem?: Maybe<CartItem>;
  cartItems: Array<CartItem>;
  carts: Array<Cart>;
  categories: Array<Category>;
  category?: Maybe<Category>;
  defaultShippingAdress?: Maybe<DefaultShippingAdress>;
  defaultShippingAdresses: Array<DefaultShippingAdress>;
  employee?: Maybe<Employee>;
  employeeCategories: Array<EmployeeCategory>;
  employeeCategory?: Maybe<EmployeeCategory>;
  employeeSubCategories: Array<EmployeeSubCategory>;
  employeeSubCategory?: Maybe<EmployeeSubCategory>;
  employees: Array<Employee>;
  fetaureCategories: Array<FetaureCategory>;
  fetaureCategory?: Maybe<FetaureCategory>;
  findFirstCart?: Maybe<Cart>;
  findFirstCartItem?: Maybe<CartItem>;
  findFirstCartItemOrThrow?: Maybe<CartItem>;
  findFirstCartOrThrow?: Maybe<Cart>;
  findFirstCategory?: Maybe<Category>;
  findFirstCategoryOrThrow?: Maybe<Category>;
  findFirstDefaultShippingAdress?: Maybe<DefaultShippingAdress>;
  findFirstDefaultShippingAdressOrThrow?: Maybe<DefaultShippingAdress>;
  findFirstEmployee?: Maybe<Employee>;
  findFirstEmployeeCategory?: Maybe<EmployeeCategory>;
  findFirstEmployeeCategoryOrThrow?: Maybe<EmployeeCategory>;
  findFirstEmployeeOrThrow?: Maybe<Employee>;
  findFirstEmployeeSubCategory?: Maybe<EmployeeSubCategory>;
  findFirstEmployeeSubCategoryOrThrow?: Maybe<EmployeeSubCategory>;
  findFirstFetaureCategory?: Maybe<FetaureCategory>;
  findFirstFetaureCategoryOrThrow?: Maybe<FetaureCategory>;
  findFirstMainCategory?: Maybe<MainCategory>;
  findFirstMainCategoryOrThrow?: Maybe<MainCategory>;
  findFirstOrder?: Maybe<Order>;
  findFirstOrderItem?: Maybe<OrderItem>;
  findFirstOrderItemOrThrow?: Maybe<OrderItem>;
  findFirstOrderOrThrow?: Maybe<Order>;
  findFirstPaymentResult?: Maybe<PaymentResult>;
  findFirstPaymentResultOrThrow?: Maybe<PaymentResult>;
  findFirstProduct?: Maybe<Product>;
  findFirstProductFetaure?: Maybe<ProductFetaure>;
  findFirstProductFetaureOrThrow?: Maybe<ProductFetaure>;
  findFirstProductOrThrow?: Maybe<Product>;
  findFirstReview?: Maybe<Review>;
  findFirstReviewOrThrow?: Maybe<Review>;
  findFirstShippingAddress?: Maybe<ShippingAddress>;
  findFirstShippingAddressOrThrow?: Maybe<ShippingAddress>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  findFirstUserTokens?: Maybe<UserTokens>;
  findFirstUserTokensOrThrow?: Maybe<UserTokens>;
  findManyUserTokens: Array<UserTokens>;
  findUniqueUserTokens?: Maybe<UserTokens>;
  findUniqueUserTokensOrThrow?: Maybe<UserTokens>;
  getCart?: Maybe<Cart>;
  getCartItem?: Maybe<CartItem>;
  getCategory?: Maybe<Category>;
  getDefaultShippingAdress?: Maybe<DefaultShippingAdress>;
  getEmployee?: Maybe<Employee>;
  getEmployeeCategory?: Maybe<EmployeeCategory>;
  getEmployeeSubCategory?: Maybe<EmployeeSubCategory>;
  getFetaureCategory?: Maybe<FetaureCategory>;
  getMainCategory?: Maybe<MainCategory>;
  getOrder?: Maybe<Order>;
  getOrderItem?: Maybe<OrderItem>;
  getPaymentResult?: Maybe<PaymentResult>;
  getProduct?: Maybe<Product>;
  getProductFetaure?: Maybe<ProductFetaure>;
  getReview?: Maybe<Review>;
  getShippingAddress?: Maybe<ShippingAddress>;
  getUser?: Maybe<User>;
  groupByCart: Array<CartGroupBy>;
  groupByCartItem: Array<CartItemGroupBy>;
  groupByCategory: Array<CategoryGroupBy>;
  groupByDefaultShippingAdress: Array<DefaultShippingAdressGroupBy>;
  groupByEmployee: Array<EmployeeGroupBy>;
  groupByEmployeeCategory: Array<EmployeeCategoryGroupBy>;
  groupByEmployeeSubCategory: Array<EmployeeSubCategoryGroupBy>;
  groupByFetaureCategory: Array<FetaureCategoryGroupBy>;
  groupByMainCategory: Array<MainCategoryGroupBy>;
  groupByOrder: Array<OrderGroupBy>;
  groupByOrderItem: Array<OrderItemGroupBy>;
  groupByPaymentResult: Array<PaymentResultGroupBy>;
  groupByProduct: Array<ProductGroupBy>;
  groupByProductFetaure: Array<ProductFetaureGroupBy>;
  groupByReview: Array<ReviewGroupBy>;
  groupByShippingAddress: Array<ShippingAddressGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUserTokens: Array<UserTokensGroupBy>;
  healthCheck: Scalars['String']['output'];
  mainCategories: Array<MainCategory>;
  mainCategory?: Maybe<MainCategory>;
  me?: Maybe<UserForResponsce>;
  meAdmin?: Maybe<UserForResponsce>;
  myOrders: Array<Order>;
  order?: Maybe<Order>;
  orderItem?: Maybe<OrderItem>;
  orderItems: Array<OrderItem>;
  orders: Array<Order>;
  paymentResult?: Maybe<PaymentResult>;
  paymentResults: Array<PaymentResult>;
  product?: Maybe<Product>;
  productFetaure?: Maybe<ProductFetaure>;
  productFetaures: Array<ProductFetaure>;
  products: Array<Product>;
  review?: Maybe<Review>;
  reviews: Array<Review>;
  shippingAddress?: Maybe<ShippingAddress>;
  shippingAddresses: Array<ShippingAddress>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateCartArgs = {
  cursor?: InputMaybe<CartWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CartOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CartWhereInput>;
};


export type QueryAggregateCartItemArgs = {
  cursor?: InputMaybe<CartItemWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CartItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CartItemWhereInput>;
};


export type QueryAggregateCategoryArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryAggregateDefaultShippingAdressArgs = {
  cursor?: InputMaybe<DefaultShippingAdressWhereUniqueInput>;
  orderBy?: InputMaybe<Array<DefaultShippingAdressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DefaultShippingAdressWhereInput>;
};


export type QueryAggregateEmployeeArgs = {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeWhereInput>;
};


export type QueryAggregateEmployeeCategoryArgs = {
  cursor?: InputMaybe<EmployeeCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EmployeeCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeCategoryWhereInput>;
};


export type QueryAggregateEmployeeSubCategoryArgs = {
  cursor?: InputMaybe<EmployeeSubCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EmployeeSubCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeSubCategoryWhereInput>;
};


export type QueryAggregateFetaureCategoryArgs = {
  cursor?: InputMaybe<FetaureCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FetaureCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FetaureCategoryWhereInput>;
};


export type QueryAggregateMainCategoryArgs = {
  cursor?: InputMaybe<MainCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MainCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MainCategoryWhereInput>;
};


export type QueryAggregateOrderArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryAggregateOrderItemArgs = {
  cursor?: InputMaybe<OrderItemWhereUniqueInput>;
  orderBy?: InputMaybe<Array<OrderItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderItemWhereInput>;
};


export type QueryAggregatePaymentResultArgs = {
  cursor?: InputMaybe<PaymentResultWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PaymentResultOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PaymentResultWhereInput>;
};


export type QueryAggregateProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryAggregateProductFetaureArgs = {
  cursor?: InputMaybe<ProductFetaureWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductFetaureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFetaureWhereInput>;
};


export type QueryAggregateReviewArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryAggregateShippingAddressArgs = {
  cursor?: InputMaybe<ShippingAddressWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ShippingAddressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ShippingAddressWhereInput>;
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


export type QueryCartArgs = {
  where: CartWhereUniqueInput;
};


export type QueryCartItemArgs = {
  where: CartItemWhereUniqueInput;
};


export type QueryCartItemsArgs = {
  cursor?: InputMaybe<CartItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<CartItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CartItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CartItemWhereInput>;
};


export type QueryCartsArgs = {
  cursor?: InputMaybe<CartWhereUniqueInput>;
  distinct?: InputMaybe<Array<CartScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CartOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CartWhereInput>;
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


export type QueryDefaultShippingAdressArgs = {
  where: DefaultShippingAdressWhereUniqueInput;
};


export type QueryDefaultShippingAdressesArgs = {
  cursor?: InputMaybe<DefaultShippingAdressWhereUniqueInput>;
  distinct?: InputMaybe<Array<DefaultShippingAdressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DefaultShippingAdressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DefaultShippingAdressWhereInput>;
};


export type QueryEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
};


export type QueryEmployeeCategoriesArgs = {
  cursor?: InputMaybe<EmployeeCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeCategoryWhereInput>;
};


export type QueryEmployeeCategoryArgs = {
  where: EmployeeCategoryWhereUniqueInput;
};


export type QueryEmployeeSubCategoriesArgs = {
  cursor?: InputMaybe<EmployeeSubCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeSubCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeSubCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeSubCategoryWhereInput>;
};


export type QueryEmployeeSubCategoryArgs = {
  where: EmployeeSubCategoryWhereUniqueInput;
};


export type QueryEmployeesArgs = {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeWhereInput>;
};


export type QueryFetaureCategoriesArgs = {
  cursor?: InputMaybe<FetaureCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<FetaureCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FetaureCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FetaureCategoryWhereInput>;
};


export type QueryFetaureCategoryArgs = {
  where: FetaureCategoryWhereUniqueInput;
};


export type QueryFindFirstCartArgs = {
  cursor?: InputMaybe<CartWhereUniqueInput>;
  distinct?: InputMaybe<Array<CartScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CartOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CartWhereInput>;
};


export type QueryFindFirstCartItemArgs = {
  cursor?: InputMaybe<CartItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<CartItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CartItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CartItemWhereInput>;
};


export type QueryFindFirstCartItemOrThrowArgs = {
  cursor?: InputMaybe<CartItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<CartItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CartItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CartItemWhereInput>;
};


export type QueryFindFirstCartOrThrowArgs = {
  cursor?: InputMaybe<CartWhereUniqueInput>;
  distinct?: InputMaybe<Array<CartScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CartOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CartWhereInput>;
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


export type QueryFindFirstDefaultShippingAdressArgs = {
  cursor?: InputMaybe<DefaultShippingAdressWhereUniqueInput>;
  distinct?: InputMaybe<Array<DefaultShippingAdressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DefaultShippingAdressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DefaultShippingAdressWhereInput>;
};


export type QueryFindFirstDefaultShippingAdressOrThrowArgs = {
  cursor?: InputMaybe<DefaultShippingAdressWhereUniqueInput>;
  distinct?: InputMaybe<Array<DefaultShippingAdressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DefaultShippingAdressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DefaultShippingAdressWhereInput>;
};


export type QueryFindFirstEmployeeArgs = {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeWhereInput>;
};


export type QueryFindFirstEmployeeCategoryArgs = {
  cursor?: InputMaybe<EmployeeCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeCategoryWhereInput>;
};


export type QueryFindFirstEmployeeCategoryOrThrowArgs = {
  cursor?: InputMaybe<EmployeeCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeCategoryWhereInput>;
};


export type QueryFindFirstEmployeeOrThrowArgs = {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeWhereInput>;
};


export type QueryFindFirstEmployeeSubCategoryArgs = {
  cursor?: InputMaybe<EmployeeSubCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeSubCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeSubCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeSubCategoryWhereInput>;
};


export type QueryFindFirstEmployeeSubCategoryOrThrowArgs = {
  cursor?: InputMaybe<EmployeeSubCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeSubCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeSubCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeSubCategoryWhereInput>;
};


export type QueryFindFirstFetaureCategoryArgs = {
  cursor?: InputMaybe<FetaureCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<FetaureCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FetaureCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FetaureCategoryWhereInput>;
};


export type QueryFindFirstFetaureCategoryOrThrowArgs = {
  cursor?: InputMaybe<FetaureCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<FetaureCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FetaureCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FetaureCategoryWhereInput>;
};


export type QueryFindFirstMainCategoryArgs = {
  cursor?: InputMaybe<MainCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<MainCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MainCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MainCategoryWhereInput>;
};


export type QueryFindFirstMainCategoryOrThrowArgs = {
  cursor?: InputMaybe<MainCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<MainCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MainCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MainCategoryWhereInput>;
};


export type QueryFindFirstOrderArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryFindFirstOrderItemArgs = {
  cursor?: InputMaybe<OrderItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderItemWhereInput>;
};


export type QueryFindFirstOrderItemOrThrowArgs = {
  cursor?: InputMaybe<OrderItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderItemWhereInput>;
};


export type QueryFindFirstOrderOrThrowArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryFindFirstPaymentResultArgs = {
  cursor?: InputMaybe<PaymentResultWhereUniqueInput>;
  distinct?: InputMaybe<Array<PaymentResultScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PaymentResultOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PaymentResultWhereInput>;
};


export type QueryFindFirstPaymentResultOrThrowArgs = {
  cursor?: InputMaybe<PaymentResultWhereUniqueInput>;
  distinct?: InputMaybe<Array<PaymentResultScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PaymentResultOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PaymentResultWhereInput>;
};


export type QueryFindFirstProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryFindFirstProductFetaureArgs = {
  cursor?: InputMaybe<ProductFetaureWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductFetaureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductFetaureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFetaureWhereInput>;
};


export type QueryFindFirstProductFetaureOrThrowArgs = {
  cursor?: InputMaybe<ProductFetaureWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductFetaureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductFetaureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFetaureWhereInput>;
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


export type QueryFindFirstShippingAddressArgs = {
  cursor?: InputMaybe<ShippingAddressWhereUniqueInput>;
  distinct?: InputMaybe<Array<ShippingAddressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ShippingAddressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ShippingAddressWhereInput>;
};


export type QueryFindFirstShippingAddressOrThrowArgs = {
  cursor?: InputMaybe<ShippingAddressWhereUniqueInput>;
  distinct?: InputMaybe<Array<ShippingAddressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ShippingAddressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ShippingAddressWhereInput>;
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


export type QueryGetCartArgs = {
  where: CartWhereUniqueInput;
};


export type QueryGetCartItemArgs = {
  where: CartItemWhereUniqueInput;
};


export type QueryGetCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryGetDefaultShippingAdressArgs = {
  where: DefaultShippingAdressWhereUniqueInput;
};


export type QueryGetEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
};


export type QueryGetEmployeeCategoryArgs = {
  where: EmployeeCategoryWhereUniqueInput;
};


export type QueryGetEmployeeSubCategoryArgs = {
  where: EmployeeSubCategoryWhereUniqueInput;
};


export type QueryGetFetaureCategoryArgs = {
  where: FetaureCategoryWhereUniqueInput;
};


export type QueryGetMainCategoryArgs = {
  where: MainCategoryWhereUniqueInput;
};


export type QueryGetOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type QueryGetOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type QueryGetPaymentResultArgs = {
  where: PaymentResultWhereUniqueInput;
};


export type QueryGetProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryGetProductFetaureArgs = {
  where: ProductFetaureWhereUniqueInput;
};


export type QueryGetReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type QueryGetShippingAddressArgs = {
  where: ShippingAddressWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGroupByCartArgs = {
  by: Array<CartScalarFieldEnum>;
  having?: InputMaybe<CartScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CartOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CartWhereInput>;
};


export type QueryGroupByCartItemArgs = {
  by: Array<CartItemScalarFieldEnum>;
  having?: InputMaybe<CartItemScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CartItemOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CartItemWhereInput>;
};


export type QueryGroupByCategoryArgs = {
  by: Array<CategoryScalarFieldEnum>;
  having?: InputMaybe<CategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryGroupByDefaultShippingAdressArgs = {
  by: Array<DefaultShippingAdressScalarFieldEnum>;
  having?: InputMaybe<DefaultShippingAdressScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<DefaultShippingAdressOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DefaultShippingAdressWhereInput>;
};


export type QueryGroupByEmployeeArgs = {
  by: Array<EmployeeScalarFieldEnum>;
  having?: InputMaybe<EmployeeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeWhereInput>;
};


export type QueryGroupByEmployeeCategoryArgs = {
  by: Array<EmployeeCategoryScalarFieldEnum>;
  having?: InputMaybe<EmployeeCategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<EmployeeCategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeCategoryWhereInput>;
};


export type QueryGroupByEmployeeSubCategoryArgs = {
  by: Array<EmployeeSubCategoryScalarFieldEnum>;
  having?: InputMaybe<EmployeeSubCategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<EmployeeSubCategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeSubCategoryWhereInput>;
};


export type QueryGroupByFetaureCategoryArgs = {
  by: Array<FetaureCategoryScalarFieldEnum>;
  having?: InputMaybe<FetaureCategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FetaureCategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FetaureCategoryWhereInput>;
};


export type QueryGroupByMainCategoryArgs = {
  by: Array<MainCategoryScalarFieldEnum>;
  having?: InputMaybe<MainCategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MainCategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MainCategoryWhereInput>;
};


export type QueryGroupByOrderArgs = {
  by: Array<OrderScalarFieldEnum>;
  having?: InputMaybe<OrderScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<OrderOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryGroupByOrderItemArgs = {
  by: Array<OrderItemScalarFieldEnum>;
  having?: InputMaybe<OrderItemScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<OrderItemOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderItemWhereInput>;
};


export type QueryGroupByPaymentResultArgs = {
  by: Array<PaymentResultScalarFieldEnum>;
  having?: InputMaybe<PaymentResultScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PaymentResultOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PaymentResultWhereInput>;
};


export type QueryGroupByProductArgs = {
  by: Array<ProductScalarFieldEnum>;
  having?: InputMaybe<ProductScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryGroupByProductFetaureArgs = {
  by: Array<ProductFetaureScalarFieldEnum>;
  having?: InputMaybe<ProductFetaureScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductFetaureOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFetaureWhereInput>;
};


export type QueryGroupByReviewArgs = {
  by: Array<ReviewScalarFieldEnum>;
  having?: InputMaybe<ReviewScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ReviewOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryGroupByShippingAddressArgs = {
  by: Array<ShippingAddressScalarFieldEnum>;
  having?: InputMaybe<ShippingAddressScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ShippingAddressOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ShippingAddressWhereInput>;
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


export type QueryMainCategoriesArgs = {
  cursor?: InputMaybe<MainCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<MainCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MainCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MainCategoryWhereInput>;
};


export type QueryMainCategoryArgs = {
  where: MainCategoryWhereUniqueInput;
};


export type QueryMyOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type QueryOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type QueryOrderItemsArgs = {
  cursor?: InputMaybe<OrderItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderItemWhereInput>;
};


export type QueryOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryPaymentResultArgs = {
  where: PaymentResultWhereUniqueInput;
};


export type QueryPaymentResultsArgs = {
  cursor?: InputMaybe<PaymentResultWhereUniqueInput>;
  distinct?: InputMaybe<Array<PaymentResultScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PaymentResultOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PaymentResultWhereInput>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductFetaureArgs = {
  where: ProductFetaureWhereUniqueInput;
};


export type QueryProductFetauresArgs = {
  cursor?: InputMaybe<ProductFetaureWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductFetaureScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductFetaureOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFetaureWhereInput>;
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


export type QueryShippingAddressArgs = {
  where: ShippingAddressWhereUniqueInput;
};


export type QueryShippingAddressesArgs = {
  cursor?: InputMaybe<ShippingAddressWhereUniqueInput>;
  distinct?: InputMaybe<Array<ShippingAddressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ShippingAddressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ShippingAddressWhereInput>;
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

export type ShippingAddress = {
  __typename?: 'ShippingAddress';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
  order: Order;
  orderId: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
};

export type ShippingAddressAvgAggregate = {
  __typename?: 'ShippingAddressAvgAggregate';
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
};

export type ShippingAddressAvgOrderByAggregateInput = {
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
};

export type ShippingAddressCountAggregate = {
  __typename?: 'ShippingAddressCountAggregate';
  _all: Scalars['Int']['output'];
  address: Scalars['Int']['output'];
  city: Scalars['Int']['output'];
  country: Scalars['Int']['output'];
  fullName: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lat: Scalars['Int']['output'];
  lng: Scalars['Int']['output'];
  orderId: Scalars['Int']['output'];
  postalCode: Scalars['Int']['output'];
};

export type ShippingAddressCountOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  orderId?: InputMaybe<SortOrder>;
  postalCode?: InputMaybe<SortOrder>;
};

export type ShippingAddressCreateInput = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
  order: OrderCreateNestedOneWithoutShippingAddressInput;
  postalCode: Scalars['String']['input'];
};

export type ShippingAddressCreateManyInput = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
  orderId: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
};

export type ShippingAddressCreateNestedOneWithoutOrderInput = {
  connect?: InputMaybe<ShippingAddressWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShippingAddressCreateOrConnectWithoutOrderInput>;
  create?: InputMaybe<ShippingAddressCreateWithoutOrderInput>;
};

export type ShippingAddressCreateOrConnectWithoutOrderInput = {
  create: ShippingAddressCreateWithoutOrderInput;
  where: ShippingAddressWhereUniqueInput;
};

export type ShippingAddressCreateWithoutOrderInput = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
  postalCode: Scalars['String']['input'];
};

export type ShippingAddressGroupBy = {
  __typename?: 'ShippingAddressGroupBy';
  _avg?: Maybe<ShippingAddressAvgAggregate>;
  _count?: Maybe<ShippingAddressCountAggregate>;
  _max?: Maybe<ShippingAddressMaxAggregate>;
  _min?: Maybe<ShippingAddressMinAggregate>;
  _sum?: Maybe<ShippingAddressSumAggregate>;
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
  orderId: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
};

export type ShippingAddressMaxAggregate = {
  __typename?: 'ShippingAddressMaxAggregate';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  orderId?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
};

export type ShippingAddressMaxOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  orderId?: InputMaybe<SortOrder>;
  postalCode?: InputMaybe<SortOrder>;
};

export type ShippingAddressMinAggregate = {
  __typename?: 'ShippingAddressMinAggregate';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  orderId?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
};

export type ShippingAddressMinOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  orderId?: InputMaybe<SortOrder>;
  postalCode?: InputMaybe<SortOrder>;
};

export type ShippingAddressOrderByWithAggregationInput = {
  _avg?: InputMaybe<ShippingAddressAvgOrderByAggregateInput>;
  _count?: InputMaybe<ShippingAddressCountOrderByAggregateInput>;
  _max?: InputMaybe<ShippingAddressMaxOrderByAggregateInput>;
  _min?: InputMaybe<ShippingAddressMinOrderByAggregateInput>;
  _sum?: InputMaybe<ShippingAddressSumOrderByAggregateInput>;
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  orderId?: InputMaybe<SortOrder>;
  postalCode?: InputMaybe<SortOrder>;
};

export type ShippingAddressOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  order?: InputMaybe<OrderOrderByWithRelationInput>;
  orderId?: InputMaybe<SortOrder>;
  postalCode?: InputMaybe<SortOrder>;
};

export type ShippingAddressRelationFilter = {
  is?: InputMaybe<ShippingAddressWhereInput>;
  isNot?: InputMaybe<ShippingAddressWhereInput>;
};

export enum ShippingAddressScalarFieldEnum {
  Address = 'address',
  City = 'city',
  Country = 'country',
  FullName = 'fullName',
  Id = 'id',
  Lat = 'lat',
  Lng = 'lng',
  OrderId = 'orderId',
  PostalCode = 'postalCode'
}

export type ShippingAddressScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ShippingAddressScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ShippingAddressScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ShippingAddressScalarWhereWithAggregatesInput>>;
  address?: InputMaybe<StringWithAggregatesFilter>;
  city?: InputMaybe<StringWithAggregatesFilter>;
  country?: InputMaybe<StringWithAggregatesFilter>;
  fullName?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  lat?: InputMaybe<FloatWithAggregatesFilter>;
  lng?: InputMaybe<FloatWithAggregatesFilter>;
  orderId?: InputMaybe<StringWithAggregatesFilter>;
  postalCode?: InputMaybe<StringWithAggregatesFilter>;
};

export type ShippingAddressSumAggregate = {
  __typename?: 'ShippingAddressSumAggregate';
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
};

export type ShippingAddressSumOrderByAggregateInput = {
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
};

export type ShippingAddressUpdateInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lat?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lng?: InputMaybe<FloatFieldUpdateOperationsInput>;
  order?: InputMaybe<OrderUpdateOneRequiredWithoutShippingAddressNestedInput>;
  postalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ShippingAddressUpdateManyMutationInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lat?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lng?: InputMaybe<FloatFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ShippingAddressUpdateOneWithoutOrderNestedInput = {
  connect?: InputMaybe<ShippingAddressWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShippingAddressCreateOrConnectWithoutOrderInput>;
  create?: InputMaybe<ShippingAddressCreateWithoutOrderInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<ShippingAddressUpdateWithoutOrderInput>;
  upsert?: InputMaybe<ShippingAddressUpsertWithoutOrderInput>;
};

export type ShippingAddressUpdateWithoutOrderInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lat?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lng?: InputMaybe<FloatFieldUpdateOperationsInput>;
  postalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ShippingAddressUpsertWithoutOrderInput = {
  create: ShippingAddressCreateWithoutOrderInput;
  update: ShippingAddressUpdateWithoutOrderInput;
};

export type ShippingAddressWhereInput = {
  AND?: InputMaybe<Array<ShippingAddressWhereInput>>;
  NOT?: InputMaybe<Array<ShippingAddressWhereInput>>;
  OR?: InputMaybe<Array<ShippingAddressWhereInput>>;
  address?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  fullName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
  order?: InputMaybe<OrderRelationFilter>;
  orderId?: InputMaybe<StringFilter>;
  postalCode?: InputMaybe<StringFilter>;
};

export type ShippingAddressWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
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
  cart?: Maybe<Cart>;
  createdAt: Scalars['DateTime']['output'];
  defaultShippingAdress?: Maybe<DefaultShippingAdress>;
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastname: Scalars['String']['output'];
  orders: Array<Order>;
  password: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  reveiws: Array<Review>;
  role: UserRole;
  status: UserAccountStatus;
  updatedAt: Scalars['DateTime']['output'];
};


export type UserOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderWhereInput>;
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
  orders: Scalars['Int']['output'];
  reveiws: Scalars['Int']['output'];
};


export type UserCountOrdersArgs = {
  where?: InputMaybe<OrderWhereInput>;
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
  cart?: InputMaybe<CartCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  defaultShippingAdress?: InputMaybe<DefaultShippingAdressCreateNestedOneWithoutUserInput>;
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastname: Scalars['String']['input'];
  orders?: InputMaybe<OrderCreateNestedManyWithoutUserInput>;
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

export type UserCreateNestedOneWithoutCartInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCartInput>;
  create?: InputMaybe<UserCreateWithoutCartInput>;
};

export type UserCreateNestedOneWithoutDefaultShippingAdressInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutDefaultShippingAdressInput>;
  create?: InputMaybe<UserCreateWithoutDefaultShippingAdressInput>;
};

export type UserCreateNestedOneWithoutOrdersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutOrdersInput>;
  create?: InputMaybe<UserCreateWithoutOrdersInput>;
};

export type UserCreateNestedOneWithoutReveiwsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReveiwsInput>;
  create?: InputMaybe<UserCreateWithoutReveiwsInput>;
};

export type UserCreateOrConnectWithoutCartInput = {
  create: UserCreateWithoutCartInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutDefaultShippingAdressInput = {
  create: UserCreateWithoutDefaultShippingAdressInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutOrdersInput = {
  create: UserCreateWithoutOrdersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutReveiwsInput = {
  create: UserCreateWithoutReveiwsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCartInput = {
  avater?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  defaultShippingAdress?: InputMaybe<DefaultShippingAdressCreateNestedOneWithoutUserInput>;
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastname: Scalars['String']['input'];
  orders?: InputMaybe<OrderCreateNestedManyWithoutUserInput>;
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role: UserRole;
  status?: InputMaybe<UserAccountStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutDefaultShippingAdressInput = {
  avater?: InputMaybe<Scalars['String']['input']>;
  cart?: InputMaybe<CartCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastname: Scalars['String']['input'];
  orders?: InputMaybe<OrderCreateNestedManyWithoutUserInput>;
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role: UserRole;
  status?: InputMaybe<UserAccountStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutOrdersInput = {
  avater?: InputMaybe<Scalars['String']['input']>;
  cart?: InputMaybe<CartCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  defaultShippingAdress?: InputMaybe<DefaultShippingAdressCreateNestedOneWithoutUserInput>;
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

export type UserCreateWithoutReveiwsInput = {
  avater?: InputMaybe<Scalars['String']['input']>;
  cart?: InputMaybe<CartCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  defaultShippingAdress?: InputMaybe<DefaultShippingAdressCreateNestedOneWithoutUserInput>;
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastname: Scalars['String']['input'];
  orders?: InputMaybe<OrderCreateNestedManyWithoutUserInput>;
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
  cart?: InputMaybe<CartOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  defaultShippingAdress?: InputMaybe<DefaultShippingAdressOrderByWithRelationInput>;
  email?: InputMaybe<SortOrder>;
  firstname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastname?: InputMaybe<SortOrder>;
  orders?: InputMaybe<OrderOrderByRelationAggregateInput>;
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
  cart?: InputMaybe<CartUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  defaultShippingAdress?: InputMaybe<DefaultShippingAdressUpdateOneWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastname?: InputMaybe<StringFieldUpdateOperationsInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutUserNestedInput>;
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

export type UserUpdateOneRequiredWithoutCartNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCartInput>;
  create?: InputMaybe<UserCreateWithoutCartInput>;
  update?: InputMaybe<UserUpdateWithoutCartInput>;
  upsert?: InputMaybe<UserUpsertWithoutCartInput>;
};

export type UserUpdateOneRequiredWithoutDefaultShippingAdressNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutDefaultShippingAdressInput>;
  create?: InputMaybe<UserCreateWithoutDefaultShippingAdressInput>;
  update?: InputMaybe<UserUpdateWithoutDefaultShippingAdressInput>;
  upsert?: InputMaybe<UserUpsertWithoutDefaultShippingAdressInput>;
};

export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutOrdersInput>;
  create?: InputMaybe<UserCreateWithoutOrdersInput>;
  update?: InputMaybe<UserUpdateWithoutOrdersInput>;
  upsert?: InputMaybe<UserUpsertWithoutOrdersInput>;
};

export type UserUpdateOneRequiredWithoutReveiwsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReveiwsInput>;
  create?: InputMaybe<UserCreateWithoutReveiwsInput>;
  update?: InputMaybe<UserUpdateWithoutReveiwsInput>;
  upsert?: InputMaybe<UserUpsertWithoutReveiwsInput>;
};

export type UserUpdateWithoutCartInput = {
  avater?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  defaultShippingAdress?: InputMaybe<DefaultShippingAdressUpdateOneWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastname?: InputMaybe<StringFieldUpdateOperationsInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserAccountStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutDefaultShippingAdressInput = {
  avater?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cart?: InputMaybe<CartUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastname?: InputMaybe<StringFieldUpdateOperationsInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserAccountStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutOrdersInput = {
  avater?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cart?: InputMaybe<CartUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  defaultShippingAdress?: InputMaybe<DefaultShippingAdressUpdateOneWithoutUserNestedInput>;
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

export type UserUpdateWithoutReveiwsInput = {
  avater?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cart?: InputMaybe<CartUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  defaultShippingAdress?: InputMaybe<DefaultShippingAdressUpdateOneWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastname?: InputMaybe<StringFieldUpdateOperationsInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutUserNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserAccountStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutCartInput = {
  create: UserCreateWithoutCartInput;
  update: UserUpdateWithoutCartInput;
};

export type UserUpsertWithoutDefaultShippingAdressInput = {
  create: UserCreateWithoutDefaultShippingAdressInput;
  update: UserUpdateWithoutDefaultShippingAdressInput;
};

export type UserUpsertWithoutOrdersInput = {
  create: UserCreateWithoutOrdersInput;
  update: UserUpdateWithoutOrdersInput;
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
  cart?: InputMaybe<CartRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  defaultShippingAdress?: InputMaybe<DefaultShippingAdressRelationFilter>;
  email?: InputMaybe<StringFilter>;
  firstname?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastname?: InputMaybe<StringFilter>;
  orders?: InputMaybe<OrderListRelationFilter>;
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

export type CreateCheckoutSessionargs = {
  employeeId?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  paymentType: ProductPaymentTypes;
  productIds: Array<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
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

export type PaymentSessionCreateResponse = {
  __typename?: 'paymentSessionCreateResponse';
  id?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export enum ProductPaymentTypes {
  OneTimePayment = 'oneTimePayment',
  OrderStartPrice = 'orderStartPrice',
  Totalprice = 'totalprice'
}

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


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string, mainCategoryId?: string | null }> };

export type EmployeesQueryVariables = Exact<{
  where?: InputMaybe<EmployeeWhereInput>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput> | EmployeeOrderByWithRelationInput>;
  cursor?: InputMaybe<EmployeeWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<EmployeeScalarFieldEnum> | EmployeeScalarFieldEnum>;
}>;


export type EmployeesQuery = { __typename?: 'Query', employees: Array<{ __typename?: 'Employee', id: string, image: string, name: string, employeeCategoryId?: string | null, employeeSubCategoryId?: string | null, shortDescription: string }> };

export type CreateOneEmployeeMutationVariables = Exact<{
  data: EmployeeCreateInput;
}>;


export type CreateOneEmployeeMutation = { __typename?: 'Mutation', createOneEmployee: { __typename?: 'Employee', id: string } };

export type UpdateOneEmployeeMutationVariables = Exact<{
  data: EmployeeUpdateInput;
  where: EmployeeWhereUniqueInput;
}>;


export type UpdateOneEmployeeMutation = { __typename?: 'Mutation', updateOneEmployee?: { __typename?: 'Employee', id: string } | null };

export type EmployeeCategoriesQueryVariables = Exact<{
  where?: InputMaybe<EmployeeCategoryWhereInput>;
  orderBy?: InputMaybe<Array<EmployeeCategoryOrderByWithRelationInput> | EmployeeCategoryOrderByWithRelationInput>;
  cursor?: InputMaybe<EmployeeCategoryWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<EmployeeCategoryScalarFieldEnum> | EmployeeCategoryScalarFieldEnum>;
}>;


export type EmployeeCategoriesQuery = { __typename?: 'Query', employeeCategories: Array<{ __typename?: 'EmployeeCategory', name: string, id: string, position: number }> };

export type EmployeeCategoryQueryVariables = Exact<{
  where: EmployeeCategoryWhereUniqueInput;
}>;


export type EmployeeCategoryQuery = { __typename?: 'Query', employeeCategory?: { __typename?: 'EmployeeCategory', name: string, position: number } | null };

export type CreateOneEmployeeCategoryMutationVariables = Exact<{
  data: EmployeeCategoryCreateInput;
}>;


export type CreateOneEmployeeCategoryMutation = { __typename?: 'Mutation', createOneEmployeeCategory: { __typename?: 'EmployeeCategory', id: string } };

export type DeleteOneEmployeeCategoryMutationVariables = Exact<{
  where: EmployeeCategoryWhereUniqueInput;
}>;


export type DeleteOneEmployeeCategoryMutation = { __typename?: 'Mutation', deleteOneEmployeeCategory?: { __typename?: 'EmployeeCategory', id: string } | null };

export type UpdateOneEmployeeCategoryMutationVariables = Exact<{
  data: EmployeeCategoryUpdateInput;
  where: EmployeeCategoryWhereUniqueInput;
}>;


export type UpdateOneEmployeeCategoryMutation = { __typename?: 'Mutation', updateOneEmployeeCategory?: { __typename?: 'EmployeeCategory', id: string } | null };

export type EmployeeSubCategoriesQueryVariables = Exact<{
  where?: InputMaybe<EmployeeSubCategoryWhereInput>;
  orderBy?: InputMaybe<Array<EmployeeSubCategoryOrderByWithRelationInput> | EmployeeSubCategoryOrderByWithRelationInput>;
  cursor?: InputMaybe<EmployeeSubCategoryWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<EmployeeSubCategoryScalarFieldEnum> | EmployeeSubCategoryScalarFieldEnum>;
}>;


export type EmployeeSubCategoriesQuery = { __typename?: 'Query', employeeSubCategories: Array<{ __typename?: 'EmployeeSubCategory', id: string, name: string, slug: string, employeeCategoryId: string }> };

export type EmployeeSubCategoryQueryVariables = Exact<{
  where: EmployeeSubCategoryWhereUniqueInput;
}>;


export type EmployeeSubCategoryQuery = { __typename?: 'Query', employeeSubCategory?: { __typename?: 'EmployeeSubCategory', name: string } | null };

export type CreateOneEmployeeSubCategoryMutationVariables = Exact<{
  data: EmployeeSubCategoryCreateInput;
}>;


export type CreateOneEmployeeSubCategoryMutation = { __typename?: 'Mutation', createOneEmployeeSubCategory: { __typename?: 'EmployeeSubCategory', id: string } };

export type DeleteOneEmployeeSubCategoryMutationVariables = Exact<{
  where: EmployeeSubCategoryWhereUniqueInput;
}>;


export type DeleteOneEmployeeSubCategoryMutation = { __typename?: 'Mutation', deleteOneEmployeeSubCategory?: { __typename?: 'EmployeeSubCategory', id: string } | null };

export type UpdateOneEmployeeSubCategoryMutationVariables = Exact<{
  data: EmployeeSubCategoryUpdateInput;
  where: EmployeeSubCategoryWhereUniqueInput;
}>;


export type UpdateOneEmployeeSubCategoryMutation = { __typename?: 'Mutation', updateOneEmployeeSubCategory?: { __typename?: 'EmployeeSubCategory', id: string } | null };

export type ProductFetaureQueryVariables = Exact<{
  where: ProductFetaureWhereUniqueInput;
}>;


export type ProductFetaureQuery = { __typename?: 'Query', productFetaure?: { __typename?: 'ProductFetaure', id: string, name: string, value: string } | null };

export type ProductFetauresQueryVariables = Exact<{
  where?: InputMaybe<ProductFetaureWhereInput>;
  orderBy?: InputMaybe<Array<ProductFetaureOrderByWithRelationInput> | ProductFetaureOrderByWithRelationInput>;
  cursor?: InputMaybe<ProductFetaureWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<ProductFetaureScalarFieldEnum> | ProductFetaureScalarFieldEnum>;
}>;


export type ProductFetauresQuery = { __typename?: 'Query', productFetaures: Array<{ __typename?: 'ProductFetaure', id: string, name: string, value: string }> };

export type UpdateOneProductFetaureMutationVariables = Exact<{
  data: ProductFetaureUpdateInput;
  where: ProductFetaureWhereUniqueInput;
}>;


export type UpdateOneProductFetaureMutation = { __typename?: 'Mutation', updateOneProductFetaure?: { __typename?: 'ProductFetaure', id: string } | null };

export type DeleteOneProductFetaureMutationVariables = Exact<{
  where: ProductFetaureWhereUniqueInput;
}>;


export type DeleteOneProductFetaureMutation = { __typename?: 'Mutation', deleteOneProductFetaure?: { __typename?: 'ProductFetaure', id: string } | null };

export type CreateOneFetaureCategoryMutationVariables = Exact<{
  data: FetaureCategoryCreateInput;
}>;


export type CreateOneFetaureCategoryMutation = { __typename?: 'Mutation', createOneFetaureCategory: { __typename?: 'FetaureCategory', id: string } };

export type UpdateOneFetaureCategoryMutationVariables = Exact<{
  data: FetaureCategoryUpdateInput;
  where: FetaureCategoryWhereUniqueInput;
}>;


export type UpdateOneFetaureCategoryMutation = { __typename?: 'Mutation', updateOneFetaureCategory?: { __typename?: 'FetaureCategory', id: string } | null };

export type DeleteOneFetaureCategoryMutationVariables = Exact<{
  where: FetaureCategoryWhereUniqueInput;
}>;


export type DeleteOneFetaureCategoryMutation = { __typename?: 'Mutation', deleteOneFetaureCategory?: { __typename?: 'FetaureCategory', id: string } | null };

export type FetaureCategoryQueryVariables = Exact<{
  where: FetaureCategoryWhereUniqueInput;
}>;


export type FetaureCategoryQuery = { __typename?: 'Query', fetaureCategory?: { __typename?: 'FetaureCategory', id: string, name: string } | null };

export type FetaureCategoriesQueryVariables = Exact<{
  where?: InputMaybe<FetaureCategoryWhereInput>;
  orderBy?: InputMaybe<Array<FetaureCategoryOrderByWithRelationInput> | FetaureCategoryOrderByWithRelationInput>;
  cursor?: InputMaybe<FetaureCategoryWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<FetaureCategoryScalarFieldEnum> | FetaureCategoryScalarFieldEnum>;
}>;


export type FetaureCategoriesQuery = { __typename?: 'Query', fetaureCategories: Array<{ __typename?: 'FetaureCategory', id: string, name: string }> };

export type MainCategoriesQueryVariables = Exact<{
  where?: InputMaybe<MainCategoryWhereInput>;
  orderBy?: InputMaybe<Array<MainCategoryOrderByWithRelationInput> | MainCategoryOrderByWithRelationInput>;
  cursor?: InputMaybe<MainCategoryWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<MainCategoryScalarFieldEnum> | MainCategoryScalarFieldEnum>;
}>;


export type MainCategoriesQuery = { __typename?: 'Query', mainCategories: Array<{ __typename?: 'MainCategory', name: string, slug: string, id: string }> };

export type MainCategoryQueryVariables = Exact<{
  where: MainCategoryWhereUniqueInput;
}>;


export type MainCategoryQuery = { __typename?: 'Query', mainCategory?: { __typename?: 'MainCategory', id: string, name: string, slug: string } | null };

export type CreateOneMainCategoryMutationVariables = Exact<{
  data: MainCategoryCreateInput;
}>;


export type CreateOneMainCategoryMutation = { __typename?: 'Mutation', createOneMainCategory: { __typename?: 'MainCategory', id: string } };

export type DeleteOneMainCategoryMutationVariables = Exact<{
  where: MainCategoryWhereUniqueInput;
}>;


export type DeleteOneMainCategoryMutation = { __typename?: 'Mutation', deleteOneMainCategory?: { __typename?: 'MainCategory', id: string } | null };

export type UpdateOneMainCategoryMutationVariables = Exact<{
  data: MainCategoryUpdateInput;
  where: MainCategoryWhereUniqueInput;
}>;


export type UpdateOneMainCategoryMutation = { __typename?: 'Mutation', updateOneMainCategory?: { __typename?: 'MainCategory', id: string } | null };

export type UploadFileMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type UploadFileMutation = { __typename?: 'Mutation', uploadFile?: { __typename?: 'fileUploadResponsce', message: string, success: boolean, file?: string | null } | null };

export type OrdersQueryVariables = Exact<{
  where?: InputMaybe<OrderWhereInput>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput> | OrderOrderByWithRelationInput>;
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum> | OrderScalarFieldEnum>;
}>;


export type OrdersQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Order', createdAt: any, id: string, itemsPrePrice: number, itemsPrice: number, status: OrderStatus, taxPrice: number, totalPrice: number, shippingPrice: number, updatedAt: any, itemsPrePricePaymentSessionId?: string | null, itemsTotalPricePaymentSessionId?: string | null, orderItem: Array<{ __typename?: 'OrderItem', qty: number, id: string, product: { __typename?: 'Product', id: string, images: Array<string>, name: string } }>, shippingAddress?: { __typename?: 'ShippingAddress', id: string, lat: number, lng: number, postalCode: string, fullName: string, country: string, city: string, address: string } | null, user: { __typename?: 'User', email: string, firstname: string, lastname: string, id: string } }> };

export type UpdateOneOrderMutationVariables = Exact<{
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
}>;


export type UpdateOneOrderMutation = { __typename?: 'Mutation', updateOneOrder?: { __typename?: 'Order', id: string } | null };

export type CreateOneProductMutationVariables = Exact<{
  data: ProductCreateInput;
}>;


export type CreateOneProductMutation = { __typename?: 'Mutation', createOneProduct: { __typename?: 'Product', id: string } };

export type ProductsQueryVariables = Exact<{
  where?: InputMaybe<ProductWhereInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput> | ProductOrderByWithRelationInput>;
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum> | ProductScalarFieldEnum>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', createdAt: any, custom_product_status: CustomProductStatus, id: string, images: Array<string>, minimumOrderNeededToStart: number, name: string, orderStartPrice?: number | null, price: number, type: ProductType, stock: number, category: { __typename?: 'Category', name: string } }> };

export type AggregateProductQueryVariables = Exact<{
  where?: InputMaybe<ProductWhereInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput> | ProductOrderByWithRelationInput>;
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AggregateProductQuery = { __typename?: 'Query', aggregateProduct: { __typename?: 'AggregateProduct', _count?: { __typename?: 'ProductCountAggregate', _all: number } | null } };

export type ProductForUpdateQueryVariables = Exact<{
  where: ProductWhereUniqueInput;
}>;


export type ProductForUpdateQuery = { __typename?: 'Query', product?: { __typename?: 'Product', categoryId: string, custom_product_status: CustomProductStatus, description: string, id: string, images: Array<string>, minimumOrderNeededToStart: number, name: string, orderStartPrice?: number | null, shortdescription: string, stock: number, price: number, type: ProductType, slug: string, employeeId?: string | null, sizes: Array<string>, fetauresCategories: Array<{ __typename?: 'FetaureCategory', id: string }>, fetaures: Array<{ __typename?: 'ProductFetaure', id: string, name: string, value: string, fetaurecategoryId: string }> } | null };

export type UpdateOneProductMutationVariables = Exact<{
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
}>;


export type UpdateOneProductMutation = { __typename?: 'Mutation', updateOneProduct?: { __typename?: 'Product', id: string } | null };

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


export type RefreshTokenMutation = { __typename?: 'Mutation', adminRefreshToken?: string | null };

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
    mainCategoryId
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
export const EmployeesDocument = gql`
    query Employees($where: EmployeeWhereInput, $orderBy: [EmployeeOrderByWithRelationInput!], $cursor: EmployeeWhereUniqueInput, $take: Int, $skip: Int, $distinct: [EmployeeScalarFieldEnum!]) {
  employees(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    id
    image
    name
    employeeCategoryId
    employeeSubCategoryId
    shortDescription
  }
}
    `;

/**
 * __useEmployeesQuery__
 *
 * To run a query within a React component, call `useEmployeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmployeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmployeesQuery({
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
export function useEmployeesQuery(baseOptions?: Apollo.QueryHookOptions<EmployeesQuery, EmployeesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmployeesQuery, EmployeesQueryVariables>(EmployeesDocument, options);
      }
export function useEmployeesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmployeesQuery, EmployeesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmployeesQuery, EmployeesQueryVariables>(EmployeesDocument, options);
        }
export function useEmployeesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<EmployeesQuery, EmployeesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<EmployeesQuery, EmployeesQueryVariables>(EmployeesDocument, options);
        }
export type EmployeesQueryHookResult = ReturnType<typeof useEmployeesQuery>;
export type EmployeesLazyQueryHookResult = ReturnType<typeof useEmployeesLazyQuery>;
export type EmployeesSuspenseQueryHookResult = ReturnType<typeof useEmployeesSuspenseQuery>;
export type EmployeesQueryResult = Apollo.QueryResult<EmployeesQuery, EmployeesQueryVariables>;
export const CreateOneEmployeeDocument = gql`
    mutation CreateOneEmployee($data: EmployeeCreateInput!) {
  createOneEmployee(data: $data) {
    id
  }
}
    `;
export type CreateOneEmployeeMutationFn = Apollo.MutationFunction<CreateOneEmployeeMutation, CreateOneEmployeeMutationVariables>;

/**
 * __useCreateOneEmployeeMutation__
 *
 * To run a mutation, you first call `useCreateOneEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneEmployeeMutation, { data, loading, error }] = useCreateOneEmployeeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneEmployeeMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneEmployeeMutation, CreateOneEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneEmployeeMutation, CreateOneEmployeeMutationVariables>(CreateOneEmployeeDocument, options);
      }
export type CreateOneEmployeeMutationHookResult = ReturnType<typeof useCreateOneEmployeeMutation>;
export type CreateOneEmployeeMutationResult = Apollo.MutationResult<CreateOneEmployeeMutation>;
export type CreateOneEmployeeMutationOptions = Apollo.BaseMutationOptions<CreateOneEmployeeMutation, CreateOneEmployeeMutationVariables>;
export const UpdateOneEmployeeDocument = gql`
    mutation UpdateOneEmployee($data: EmployeeUpdateInput!, $where: EmployeeWhereUniqueInput!) {
  updateOneEmployee(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateOneEmployeeMutationFn = Apollo.MutationFunction<UpdateOneEmployeeMutation, UpdateOneEmployeeMutationVariables>;

/**
 * __useUpdateOneEmployeeMutation__
 *
 * To run a mutation, you first call `useUpdateOneEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneEmployeeMutation, { data, loading, error }] = useUpdateOneEmployeeMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateOneEmployeeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneEmployeeMutation, UpdateOneEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneEmployeeMutation, UpdateOneEmployeeMutationVariables>(UpdateOneEmployeeDocument, options);
      }
export type UpdateOneEmployeeMutationHookResult = ReturnType<typeof useUpdateOneEmployeeMutation>;
export type UpdateOneEmployeeMutationResult = Apollo.MutationResult<UpdateOneEmployeeMutation>;
export type UpdateOneEmployeeMutationOptions = Apollo.BaseMutationOptions<UpdateOneEmployeeMutation, UpdateOneEmployeeMutationVariables>;
export const EmployeeCategoriesDocument = gql`
    query EmployeeCategories($where: EmployeeCategoryWhereInput, $orderBy: [EmployeeCategoryOrderByWithRelationInput!], $cursor: EmployeeCategoryWhereUniqueInput, $take: Int, $skip: Int, $distinct: [EmployeeCategoryScalarFieldEnum!]) {
  employeeCategories(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    name
    id
    position
  }
}
    `;

/**
 * __useEmployeeCategoriesQuery__
 *
 * To run a query within a React component, call `useEmployeeCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmployeeCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmployeeCategoriesQuery({
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
export function useEmployeeCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<EmployeeCategoriesQuery, EmployeeCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmployeeCategoriesQuery, EmployeeCategoriesQueryVariables>(EmployeeCategoriesDocument, options);
      }
export function useEmployeeCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmployeeCategoriesQuery, EmployeeCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmployeeCategoriesQuery, EmployeeCategoriesQueryVariables>(EmployeeCategoriesDocument, options);
        }
export function useEmployeeCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<EmployeeCategoriesQuery, EmployeeCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<EmployeeCategoriesQuery, EmployeeCategoriesQueryVariables>(EmployeeCategoriesDocument, options);
        }
export type EmployeeCategoriesQueryHookResult = ReturnType<typeof useEmployeeCategoriesQuery>;
export type EmployeeCategoriesLazyQueryHookResult = ReturnType<typeof useEmployeeCategoriesLazyQuery>;
export type EmployeeCategoriesSuspenseQueryHookResult = ReturnType<typeof useEmployeeCategoriesSuspenseQuery>;
export type EmployeeCategoriesQueryResult = Apollo.QueryResult<EmployeeCategoriesQuery, EmployeeCategoriesQueryVariables>;
export const EmployeeCategoryDocument = gql`
    query EmployeeCategory($where: EmployeeCategoryWhereUniqueInput!) {
  employeeCategory(where: $where) {
    name
    position
  }
}
    `;

/**
 * __useEmployeeCategoryQuery__
 *
 * To run a query within a React component, call `useEmployeeCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmployeeCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmployeeCategoryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useEmployeeCategoryQuery(baseOptions: Apollo.QueryHookOptions<EmployeeCategoryQuery, EmployeeCategoryQueryVariables> & ({ variables: EmployeeCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmployeeCategoryQuery, EmployeeCategoryQueryVariables>(EmployeeCategoryDocument, options);
      }
export function useEmployeeCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmployeeCategoryQuery, EmployeeCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmployeeCategoryQuery, EmployeeCategoryQueryVariables>(EmployeeCategoryDocument, options);
        }
export function useEmployeeCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<EmployeeCategoryQuery, EmployeeCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<EmployeeCategoryQuery, EmployeeCategoryQueryVariables>(EmployeeCategoryDocument, options);
        }
export type EmployeeCategoryQueryHookResult = ReturnType<typeof useEmployeeCategoryQuery>;
export type EmployeeCategoryLazyQueryHookResult = ReturnType<typeof useEmployeeCategoryLazyQuery>;
export type EmployeeCategorySuspenseQueryHookResult = ReturnType<typeof useEmployeeCategorySuspenseQuery>;
export type EmployeeCategoryQueryResult = Apollo.QueryResult<EmployeeCategoryQuery, EmployeeCategoryQueryVariables>;
export const CreateOneEmployeeCategoryDocument = gql`
    mutation CreateOneEmployeeCategory($data: EmployeeCategoryCreateInput!) {
  createOneEmployeeCategory(data: $data) {
    id
  }
}
    `;
export type CreateOneEmployeeCategoryMutationFn = Apollo.MutationFunction<CreateOneEmployeeCategoryMutation, CreateOneEmployeeCategoryMutationVariables>;

/**
 * __useCreateOneEmployeeCategoryMutation__
 *
 * To run a mutation, you first call `useCreateOneEmployeeCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneEmployeeCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneEmployeeCategoryMutation, { data, loading, error }] = useCreateOneEmployeeCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneEmployeeCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneEmployeeCategoryMutation, CreateOneEmployeeCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneEmployeeCategoryMutation, CreateOneEmployeeCategoryMutationVariables>(CreateOneEmployeeCategoryDocument, options);
      }
export type CreateOneEmployeeCategoryMutationHookResult = ReturnType<typeof useCreateOneEmployeeCategoryMutation>;
export type CreateOneEmployeeCategoryMutationResult = Apollo.MutationResult<CreateOneEmployeeCategoryMutation>;
export type CreateOneEmployeeCategoryMutationOptions = Apollo.BaseMutationOptions<CreateOneEmployeeCategoryMutation, CreateOneEmployeeCategoryMutationVariables>;
export const DeleteOneEmployeeCategoryDocument = gql`
    mutation DeleteOneEmployeeCategory($where: EmployeeCategoryWhereUniqueInput!) {
  deleteOneEmployeeCategory(where: $where) {
    id
  }
}
    `;
export type DeleteOneEmployeeCategoryMutationFn = Apollo.MutationFunction<DeleteOneEmployeeCategoryMutation, DeleteOneEmployeeCategoryMutationVariables>;

/**
 * __useDeleteOneEmployeeCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteOneEmployeeCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneEmployeeCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneEmployeeCategoryMutation, { data, loading, error }] = useDeleteOneEmployeeCategoryMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneEmployeeCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneEmployeeCategoryMutation, DeleteOneEmployeeCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneEmployeeCategoryMutation, DeleteOneEmployeeCategoryMutationVariables>(DeleteOneEmployeeCategoryDocument, options);
      }
export type DeleteOneEmployeeCategoryMutationHookResult = ReturnType<typeof useDeleteOneEmployeeCategoryMutation>;
export type DeleteOneEmployeeCategoryMutationResult = Apollo.MutationResult<DeleteOneEmployeeCategoryMutation>;
export type DeleteOneEmployeeCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteOneEmployeeCategoryMutation, DeleteOneEmployeeCategoryMutationVariables>;
export const UpdateOneEmployeeCategoryDocument = gql`
    mutation UpdateOneEmployeeCategory($data: EmployeeCategoryUpdateInput!, $where: EmployeeCategoryWhereUniqueInput!) {
  updateOneEmployeeCategory(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateOneEmployeeCategoryMutationFn = Apollo.MutationFunction<UpdateOneEmployeeCategoryMutation, UpdateOneEmployeeCategoryMutationVariables>;

/**
 * __useUpdateOneEmployeeCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateOneEmployeeCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneEmployeeCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneEmployeeCategoryMutation, { data, loading, error }] = useUpdateOneEmployeeCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateOneEmployeeCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneEmployeeCategoryMutation, UpdateOneEmployeeCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneEmployeeCategoryMutation, UpdateOneEmployeeCategoryMutationVariables>(UpdateOneEmployeeCategoryDocument, options);
      }
export type UpdateOneEmployeeCategoryMutationHookResult = ReturnType<typeof useUpdateOneEmployeeCategoryMutation>;
export type UpdateOneEmployeeCategoryMutationResult = Apollo.MutationResult<UpdateOneEmployeeCategoryMutation>;
export type UpdateOneEmployeeCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateOneEmployeeCategoryMutation, UpdateOneEmployeeCategoryMutationVariables>;
export const EmployeeSubCategoriesDocument = gql`
    query EmployeeSubCategories($where: EmployeeSubCategoryWhereInput, $orderBy: [EmployeeSubCategoryOrderByWithRelationInput!], $cursor: EmployeeSubCategoryWhereUniqueInput, $take: Int, $skip: Int, $distinct: [EmployeeSubCategoryScalarFieldEnum!]) {
  employeeSubCategories(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    id
    name
    slug
    employeeCategoryId
  }
}
    `;

/**
 * __useEmployeeSubCategoriesQuery__
 *
 * To run a query within a React component, call `useEmployeeSubCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmployeeSubCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmployeeSubCategoriesQuery({
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
export function useEmployeeSubCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<EmployeeSubCategoriesQuery, EmployeeSubCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmployeeSubCategoriesQuery, EmployeeSubCategoriesQueryVariables>(EmployeeSubCategoriesDocument, options);
      }
export function useEmployeeSubCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmployeeSubCategoriesQuery, EmployeeSubCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmployeeSubCategoriesQuery, EmployeeSubCategoriesQueryVariables>(EmployeeSubCategoriesDocument, options);
        }
export function useEmployeeSubCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<EmployeeSubCategoriesQuery, EmployeeSubCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<EmployeeSubCategoriesQuery, EmployeeSubCategoriesQueryVariables>(EmployeeSubCategoriesDocument, options);
        }
export type EmployeeSubCategoriesQueryHookResult = ReturnType<typeof useEmployeeSubCategoriesQuery>;
export type EmployeeSubCategoriesLazyQueryHookResult = ReturnType<typeof useEmployeeSubCategoriesLazyQuery>;
export type EmployeeSubCategoriesSuspenseQueryHookResult = ReturnType<typeof useEmployeeSubCategoriesSuspenseQuery>;
export type EmployeeSubCategoriesQueryResult = Apollo.QueryResult<EmployeeSubCategoriesQuery, EmployeeSubCategoriesQueryVariables>;
export const EmployeeSubCategoryDocument = gql`
    query EmployeeSubCategory($where: EmployeeSubCategoryWhereUniqueInput!) {
  employeeSubCategory(where: $where) {
    name
  }
}
    `;

/**
 * __useEmployeeSubCategoryQuery__
 *
 * To run a query within a React component, call `useEmployeeSubCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmployeeSubCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmployeeSubCategoryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useEmployeeSubCategoryQuery(baseOptions: Apollo.QueryHookOptions<EmployeeSubCategoryQuery, EmployeeSubCategoryQueryVariables> & ({ variables: EmployeeSubCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmployeeSubCategoryQuery, EmployeeSubCategoryQueryVariables>(EmployeeSubCategoryDocument, options);
      }
export function useEmployeeSubCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmployeeSubCategoryQuery, EmployeeSubCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmployeeSubCategoryQuery, EmployeeSubCategoryQueryVariables>(EmployeeSubCategoryDocument, options);
        }
export function useEmployeeSubCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<EmployeeSubCategoryQuery, EmployeeSubCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<EmployeeSubCategoryQuery, EmployeeSubCategoryQueryVariables>(EmployeeSubCategoryDocument, options);
        }
export type EmployeeSubCategoryQueryHookResult = ReturnType<typeof useEmployeeSubCategoryQuery>;
export type EmployeeSubCategoryLazyQueryHookResult = ReturnType<typeof useEmployeeSubCategoryLazyQuery>;
export type EmployeeSubCategorySuspenseQueryHookResult = ReturnType<typeof useEmployeeSubCategorySuspenseQuery>;
export type EmployeeSubCategoryQueryResult = Apollo.QueryResult<EmployeeSubCategoryQuery, EmployeeSubCategoryQueryVariables>;
export const CreateOneEmployeeSubCategoryDocument = gql`
    mutation CreateOneEmployeeSubCategory($data: EmployeeSubCategoryCreateInput!) {
  createOneEmployeeSubCategory(data: $data) {
    id
  }
}
    `;
export type CreateOneEmployeeSubCategoryMutationFn = Apollo.MutationFunction<CreateOneEmployeeSubCategoryMutation, CreateOneEmployeeSubCategoryMutationVariables>;

/**
 * __useCreateOneEmployeeSubCategoryMutation__
 *
 * To run a mutation, you first call `useCreateOneEmployeeSubCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneEmployeeSubCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneEmployeeSubCategoryMutation, { data, loading, error }] = useCreateOneEmployeeSubCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneEmployeeSubCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneEmployeeSubCategoryMutation, CreateOneEmployeeSubCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneEmployeeSubCategoryMutation, CreateOneEmployeeSubCategoryMutationVariables>(CreateOneEmployeeSubCategoryDocument, options);
      }
export type CreateOneEmployeeSubCategoryMutationHookResult = ReturnType<typeof useCreateOneEmployeeSubCategoryMutation>;
export type CreateOneEmployeeSubCategoryMutationResult = Apollo.MutationResult<CreateOneEmployeeSubCategoryMutation>;
export type CreateOneEmployeeSubCategoryMutationOptions = Apollo.BaseMutationOptions<CreateOneEmployeeSubCategoryMutation, CreateOneEmployeeSubCategoryMutationVariables>;
export const DeleteOneEmployeeSubCategoryDocument = gql`
    mutation DeleteOneEmployeeSubCategory($where: EmployeeSubCategoryWhereUniqueInput!) {
  deleteOneEmployeeSubCategory(where: $where) {
    id
  }
}
    `;
export type DeleteOneEmployeeSubCategoryMutationFn = Apollo.MutationFunction<DeleteOneEmployeeSubCategoryMutation, DeleteOneEmployeeSubCategoryMutationVariables>;

/**
 * __useDeleteOneEmployeeSubCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteOneEmployeeSubCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneEmployeeSubCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneEmployeeSubCategoryMutation, { data, loading, error }] = useDeleteOneEmployeeSubCategoryMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneEmployeeSubCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneEmployeeSubCategoryMutation, DeleteOneEmployeeSubCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneEmployeeSubCategoryMutation, DeleteOneEmployeeSubCategoryMutationVariables>(DeleteOneEmployeeSubCategoryDocument, options);
      }
export type DeleteOneEmployeeSubCategoryMutationHookResult = ReturnType<typeof useDeleteOneEmployeeSubCategoryMutation>;
export type DeleteOneEmployeeSubCategoryMutationResult = Apollo.MutationResult<DeleteOneEmployeeSubCategoryMutation>;
export type DeleteOneEmployeeSubCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteOneEmployeeSubCategoryMutation, DeleteOneEmployeeSubCategoryMutationVariables>;
export const UpdateOneEmployeeSubCategoryDocument = gql`
    mutation UpdateOneEmployeeSubCategory($data: EmployeeSubCategoryUpdateInput!, $where: EmployeeSubCategoryWhereUniqueInput!) {
  updateOneEmployeeSubCategory(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateOneEmployeeSubCategoryMutationFn = Apollo.MutationFunction<UpdateOneEmployeeSubCategoryMutation, UpdateOneEmployeeSubCategoryMutationVariables>;

/**
 * __useUpdateOneEmployeeSubCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateOneEmployeeSubCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneEmployeeSubCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneEmployeeSubCategoryMutation, { data, loading, error }] = useUpdateOneEmployeeSubCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateOneEmployeeSubCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneEmployeeSubCategoryMutation, UpdateOneEmployeeSubCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneEmployeeSubCategoryMutation, UpdateOneEmployeeSubCategoryMutationVariables>(UpdateOneEmployeeSubCategoryDocument, options);
      }
export type UpdateOneEmployeeSubCategoryMutationHookResult = ReturnType<typeof useUpdateOneEmployeeSubCategoryMutation>;
export type UpdateOneEmployeeSubCategoryMutationResult = Apollo.MutationResult<UpdateOneEmployeeSubCategoryMutation>;
export type UpdateOneEmployeeSubCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateOneEmployeeSubCategoryMutation, UpdateOneEmployeeSubCategoryMutationVariables>;
export const ProductFetaureDocument = gql`
    query ProductFetaure($where: ProductFetaureWhereUniqueInput!) {
  productFetaure(where: $where) {
    id
    name
    value
  }
}
    `;

/**
 * __useProductFetaureQuery__
 *
 * To run a query within a React component, call `useProductFetaureQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductFetaureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductFetaureQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProductFetaureQuery(baseOptions: Apollo.QueryHookOptions<ProductFetaureQuery, ProductFetaureQueryVariables> & ({ variables: ProductFetaureQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductFetaureQuery, ProductFetaureQueryVariables>(ProductFetaureDocument, options);
      }
export function useProductFetaureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductFetaureQuery, ProductFetaureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductFetaureQuery, ProductFetaureQueryVariables>(ProductFetaureDocument, options);
        }
export function useProductFetaureSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductFetaureQuery, ProductFetaureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductFetaureQuery, ProductFetaureQueryVariables>(ProductFetaureDocument, options);
        }
export type ProductFetaureQueryHookResult = ReturnType<typeof useProductFetaureQuery>;
export type ProductFetaureLazyQueryHookResult = ReturnType<typeof useProductFetaureLazyQuery>;
export type ProductFetaureSuspenseQueryHookResult = ReturnType<typeof useProductFetaureSuspenseQuery>;
export type ProductFetaureQueryResult = Apollo.QueryResult<ProductFetaureQuery, ProductFetaureQueryVariables>;
export const ProductFetauresDocument = gql`
    query ProductFetaures($where: ProductFetaureWhereInput, $orderBy: [ProductFetaureOrderByWithRelationInput!], $cursor: ProductFetaureWhereUniqueInput, $take: Int, $skip: Int, $distinct: [ProductFetaureScalarFieldEnum!]) {
  productFetaures(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    id
    name
    value
  }
}
    `;

/**
 * __useProductFetauresQuery__
 *
 * To run a query within a React component, call `useProductFetauresQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductFetauresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductFetauresQuery({
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
export function useProductFetauresQuery(baseOptions?: Apollo.QueryHookOptions<ProductFetauresQuery, ProductFetauresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductFetauresQuery, ProductFetauresQueryVariables>(ProductFetauresDocument, options);
      }
export function useProductFetauresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductFetauresQuery, ProductFetauresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductFetauresQuery, ProductFetauresQueryVariables>(ProductFetauresDocument, options);
        }
export function useProductFetauresSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductFetauresQuery, ProductFetauresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductFetauresQuery, ProductFetauresQueryVariables>(ProductFetauresDocument, options);
        }
export type ProductFetauresQueryHookResult = ReturnType<typeof useProductFetauresQuery>;
export type ProductFetauresLazyQueryHookResult = ReturnType<typeof useProductFetauresLazyQuery>;
export type ProductFetauresSuspenseQueryHookResult = ReturnType<typeof useProductFetauresSuspenseQuery>;
export type ProductFetauresQueryResult = Apollo.QueryResult<ProductFetauresQuery, ProductFetauresQueryVariables>;
export const UpdateOneProductFetaureDocument = gql`
    mutation UpdateOneProductFetaure($data: ProductFetaureUpdateInput!, $where: ProductFetaureWhereUniqueInput!) {
  updateOneProductFetaure(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateOneProductFetaureMutationFn = Apollo.MutationFunction<UpdateOneProductFetaureMutation, UpdateOneProductFetaureMutationVariables>;

/**
 * __useUpdateOneProductFetaureMutation__
 *
 * To run a mutation, you first call `useUpdateOneProductFetaureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneProductFetaureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneProductFetaureMutation, { data, loading, error }] = useUpdateOneProductFetaureMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateOneProductFetaureMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneProductFetaureMutation, UpdateOneProductFetaureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneProductFetaureMutation, UpdateOneProductFetaureMutationVariables>(UpdateOneProductFetaureDocument, options);
      }
export type UpdateOneProductFetaureMutationHookResult = ReturnType<typeof useUpdateOneProductFetaureMutation>;
export type UpdateOneProductFetaureMutationResult = Apollo.MutationResult<UpdateOneProductFetaureMutation>;
export type UpdateOneProductFetaureMutationOptions = Apollo.BaseMutationOptions<UpdateOneProductFetaureMutation, UpdateOneProductFetaureMutationVariables>;
export const DeleteOneProductFetaureDocument = gql`
    mutation DeleteOneProductFetaure($where: ProductFetaureWhereUniqueInput!) {
  deleteOneProductFetaure(where: $where) {
    id
  }
}
    `;
export type DeleteOneProductFetaureMutationFn = Apollo.MutationFunction<DeleteOneProductFetaureMutation, DeleteOneProductFetaureMutationVariables>;

/**
 * __useDeleteOneProductFetaureMutation__
 *
 * To run a mutation, you first call `useDeleteOneProductFetaureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneProductFetaureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneProductFetaureMutation, { data, loading, error }] = useDeleteOneProductFetaureMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneProductFetaureMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneProductFetaureMutation, DeleteOneProductFetaureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneProductFetaureMutation, DeleteOneProductFetaureMutationVariables>(DeleteOneProductFetaureDocument, options);
      }
export type DeleteOneProductFetaureMutationHookResult = ReturnType<typeof useDeleteOneProductFetaureMutation>;
export type DeleteOneProductFetaureMutationResult = Apollo.MutationResult<DeleteOneProductFetaureMutation>;
export type DeleteOneProductFetaureMutationOptions = Apollo.BaseMutationOptions<DeleteOneProductFetaureMutation, DeleteOneProductFetaureMutationVariables>;
export const CreateOneFetaureCategoryDocument = gql`
    mutation CreateOneFetaureCategory($data: FetaureCategoryCreateInput!) {
  createOneFetaureCategory(data: $data) {
    id
  }
}
    `;
export type CreateOneFetaureCategoryMutationFn = Apollo.MutationFunction<CreateOneFetaureCategoryMutation, CreateOneFetaureCategoryMutationVariables>;

/**
 * __useCreateOneFetaureCategoryMutation__
 *
 * To run a mutation, you first call `useCreateOneFetaureCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneFetaureCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneFetaureCategoryMutation, { data, loading, error }] = useCreateOneFetaureCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneFetaureCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneFetaureCategoryMutation, CreateOneFetaureCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneFetaureCategoryMutation, CreateOneFetaureCategoryMutationVariables>(CreateOneFetaureCategoryDocument, options);
      }
export type CreateOneFetaureCategoryMutationHookResult = ReturnType<typeof useCreateOneFetaureCategoryMutation>;
export type CreateOneFetaureCategoryMutationResult = Apollo.MutationResult<CreateOneFetaureCategoryMutation>;
export type CreateOneFetaureCategoryMutationOptions = Apollo.BaseMutationOptions<CreateOneFetaureCategoryMutation, CreateOneFetaureCategoryMutationVariables>;
export const UpdateOneFetaureCategoryDocument = gql`
    mutation UpdateOneFetaureCategory($data: FetaureCategoryUpdateInput!, $where: FetaureCategoryWhereUniqueInput!) {
  updateOneFetaureCategory(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateOneFetaureCategoryMutationFn = Apollo.MutationFunction<UpdateOneFetaureCategoryMutation, UpdateOneFetaureCategoryMutationVariables>;

/**
 * __useUpdateOneFetaureCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateOneFetaureCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneFetaureCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneFetaureCategoryMutation, { data, loading, error }] = useUpdateOneFetaureCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateOneFetaureCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneFetaureCategoryMutation, UpdateOneFetaureCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneFetaureCategoryMutation, UpdateOneFetaureCategoryMutationVariables>(UpdateOneFetaureCategoryDocument, options);
      }
export type UpdateOneFetaureCategoryMutationHookResult = ReturnType<typeof useUpdateOneFetaureCategoryMutation>;
export type UpdateOneFetaureCategoryMutationResult = Apollo.MutationResult<UpdateOneFetaureCategoryMutation>;
export type UpdateOneFetaureCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateOneFetaureCategoryMutation, UpdateOneFetaureCategoryMutationVariables>;
export const DeleteOneFetaureCategoryDocument = gql`
    mutation DeleteOneFetaureCategory($where: FetaureCategoryWhereUniqueInput!) {
  deleteOneFetaureCategory(where: $where) {
    id
  }
}
    `;
export type DeleteOneFetaureCategoryMutationFn = Apollo.MutationFunction<DeleteOneFetaureCategoryMutation, DeleteOneFetaureCategoryMutationVariables>;

/**
 * __useDeleteOneFetaureCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteOneFetaureCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneFetaureCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneFetaureCategoryMutation, { data, loading, error }] = useDeleteOneFetaureCategoryMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneFetaureCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneFetaureCategoryMutation, DeleteOneFetaureCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneFetaureCategoryMutation, DeleteOneFetaureCategoryMutationVariables>(DeleteOneFetaureCategoryDocument, options);
      }
export type DeleteOneFetaureCategoryMutationHookResult = ReturnType<typeof useDeleteOneFetaureCategoryMutation>;
export type DeleteOneFetaureCategoryMutationResult = Apollo.MutationResult<DeleteOneFetaureCategoryMutation>;
export type DeleteOneFetaureCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteOneFetaureCategoryMutation, DeleteOneFetaureCategoryMutationVariables>;
export const FetaureCategoryDocument = gql`
    query FetaureCategory($where: FetaureCategoryWhereUniqueInput!) {
  fetaureCategory(where: $where) {
    id
    name
  }
}
    `;

/**
 * __useFetaureCategoryQuery__
 *
 * To run a query within a React component, call `useFetaureCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetaureCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetaureCategoryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFetaureCategoryQuery(baseOptions: Apollo.QueryHookOptions<FetaureCategoryQuery, FetaureCategoryQueryVariables> & ({ variables: FetaureCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetaureCategoryQuery, FetaureCategoryQueryVariables>(FetaureCategoryDocument, options);
      }
export function useFetaureCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetaureCategoryQuery, FetaureCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetaureCategoryQuery, FetaureCategoryQueryVariables>(FetaureCategoryDocument, options);
        }
export function useFetaureCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FetaureCategoryQuery, FetaureCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetaureCategoryQuery, FetaureCategoryQueryVariables>(FetaureCategoryDocument, options);
        }
export type FetaureCategoryQueryHookResult = ReturnType<typeof useFetaureCategoryQuery>;
export type FetaureCategoryLazyQueryHookResult = ReturnType<typeof useFetaureCategoryLazyQuery>;
export type FetaureCategorySuspenseQueryHookResult = ReturnType<typeof useFetaureCategorySuspenseQuery>;
export type FetaureCategoryQueryResult = Apollo.QueryResult<FetaureCategoryQuery, FetaureCategoryQueryVariables>;
export const FetaureCategoriesDocument = gql`
    query FetaureCategories($where: FetaureCategoryWhereInput, $orderBy: [FetaureCategoryOrderByWithRelationInput!], $cursor: FetaureCategoryWhereUniqueInput, $take: Int, $skip: Int, $distinct: [FetaureCategoryScalarFieldEnum!]) {
  fetaureCategories(
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
 * __useFetaureCategoriesQuery__
 *
 * To run a query within a React component, call `useFetaureCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetaureCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetaureCategoriesQuery({
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
export function useFetaureCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<FetaureCategoriesQuery, FetaureCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetaureCategoriesQuery, FetaureCategoriesQueryVariables>(FetaureCategoriesDocument, options);
      }
export function useFetaureCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetaureCategoriesQuery, FetaureCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetaureCategoriesQuery, FetaureCategoriesQueryVariables>(FetaureCategoriesDocument, options);
        }
export function useFetaureCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FetaureCategoriesQuery, FetaureCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetaureCategoriesQuery, FetaureCategoriesQueryVariables>(FetaureCategoriesDocument, options);
        }
export type FetaureCategoriesQueryHookResult = ReturnType<typeof useFetaureCategoriesQuery>;
export type FetaureCategoriesLazyQueryHookResult = ReturnType<typeof useFetaureCategoriesLazyQuery>;
export type FetaureCategoriesSuspenseQueryHookResult = ReturnType<typeof useFetaureCategoriesSuspenseQuery>;
export type FetaureCategoriesQueryResult = Apollo.QueryResult<FetaureCategoriesQuery, FetaureCategoriesQueryVariables>;
export const MainCategoriesDocument = gql`
    query MainCategories($where: MainCategoryWhereInput, $orderBy: [MainCategoryOrderByWithRelationInput!], $cursor: MainCategoryWhereUniqueInput, $take: Int, $skip: Int, $distinct: [MainCategoryScalarFieldEnum!]) {
  mainCategories(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    name
    slug
    id
  }
}
    `;

/**
 * __useMainCategoriesQuery__
 *
 * To run a query within a React component, call `useMainCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMainCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMainCategoriesQuery({
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
export function useMainCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<MainCategoriesQuery, MainCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MainCategoriesQuery, MainCategoriesQueryVariables>(MainCategoriesDocument, options);
      }
export function useMainCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MainCategoriesQuery, MainCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MainCategoriesQuery, MainCategoriesQueryVariables>(MainCategoriesDocument, options);
        }
export function useMainCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MainCategoriesQuery, MainCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MainCategoriesQuery, MainCategoriesQueryVariables>(MainCategoriesDocument, options);
        }
export type MainCategoriesQueryHookResult = ReturnType<typeof useMainCategoriesQuery>;
export type MainCategoriesLazyQueryHookResult = ReturnType<typeof useMainCategoriesLazyQuery>;
export type MainCategoriesSuspenseQueryHookResult = ReturnType<typeof useMainCategoriesSuspenseQuery>;
export type MainCategoriesQueryResult = Apollo.QueryResult<MainCategoriesQuery, MainCategoriesQueryVariables>;
export const MainCategoryDocument = gql`
    query MainCategory($where: MainCategoryWhereUniqueInput!) {
  mainCategory(where: $where) {
    id
    name
    slug
  }
}
    `;

/**
 * __useMainCategoryQuery__
 *
 * To run a query within a React component, call `useMainCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMainCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMainCategoryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMainCategoryQuery(baseOptions: Apollo.QueryHookOptions<MainCategoryQuery, MainCategoryQueryVariables> & ({ variables: MainCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MainCategoryQuery, MainCategoryQueryVariables>(MainCategoryDocument, options);
      }
export function useMainCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MainCategoryQuery, MainCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MainCategoryQuery, MainCategoryQueryVariables>(MainCategoryDocument, options);
        }
export function useMainCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MainCategoryQuery, MainCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MainCategoryQuery, MainCategoryQueryVariables>(MainCategoryDocument, options);
        }
export type MainCategoryQueryHookResult = ReturnType<typeof useMainCategoryQuery>;
export type MainCategoryLazyQueryHookResult = ReturnType<typeof useMainCategoryLazyQuery>;
export type MainCategorySuspenseQueryHookResult = ReturnType<typeof useMainCategorySuspenseQuery>;
export type MainCategoryQueryResult = Apollo.QueryResult<MainCategoryQuery, MainCategoryQueryVariables>;
export const CreateOneMainCategoryDocument = gql`
    mutation CreateOneMainCategory($data: MainCategoryCreateInput!) {
  createOneMainCategory(data: $data) {
    id
  }
}
    `;
export type CreateOneMainCategoryMutationFn = Apollo.MutationFunction<CreateOneMainCategoryMutation, CreateOneMainCategoryMutationVariables>;

/**
 * __useCreateOneMainCategoryMutation__
 *
 * To run a mutation, you first call `useCreateOneMainCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneMainCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneMainCategoryMutation, { data, loading, error }] = useCreateOneMainCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneMainCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneMainCategoryMutation, CreateOneMainCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneMainCategoryMutation, CreateOneMainCategoryMutationVariables>(CreateOneMainCategoryDocument, options);
      }
export type CreateOneMainCategoryMutationHookResult = ReturnType<typeof useCreateOneMainCategoryMutation>;
export type CreateOneMainCategoryMutationResult = Apollo.MutationResult<CreateOneMainCategoryMutation>;
export type CreateOneMainCategoryMutationOptions = Apollo.BaseMutationOptions<CreateOneMainCategoryMutation, CreateOneMainCategoryMutationVariables>;
export const DeleteOneMainCategoryDocument = gql`
    mutation DeleteOneMainCategory($where: MainCategoryWhereUniqueInput!) {
  deleteOneMainCategory(where: $where) {
    id
  }
}
    `;
export type DeleteOneMainCategoryMutationFn = Apollo.MutationFunction<DeleteOneMainCategoryMutation, DeleteOneMainCategoryMutationVariables>;

/**
 * __useDeleteOneMainCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteOneMainCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneMainCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneMainCategoryMutation, { data, loading, error }] = useDeleteOneMainCategoryMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneMainCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneMainCategoryMutation, DeleteOneMainCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneMainCategoryMutation, DeleteOneMainCategoryMutationVariables>(DeleteOneMainCategoryDocument, options);
      }
export type DeleteOneMainCategoryMutationHookResult = ReturnType<typeof useDeleteOneMainCategoryMutation>;
export type DeleteOneMainCategoryMutationResult = Apollo.MutationResult<DeleteOneMainCategoryMutation>;
export type DeleteOneMainCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteOneMainCategoryMutation, DeleteOneMainCategoryMutationVariables>;
export const UpdateOneMainCategoryDocument = gql`
    mutation UpdateOneMainCategory($data: MainCategoryUpdateInput!, $where: MainCategoryWhereUniqueInput!) {
  updateOneMainCategory(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateOneMainCategoryMutationFn = Apollo.MutationFunction<UpdateOneMainCategoryMutation, UpdateOneMainCategoryMutationVariables>;

/**
 * __useUpdateOneMainCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateOneMainCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneMainCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneMainCategoryMutation, { data, loading, error }] = useUpdateOneMainCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateOneMainCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneMainCategoryMutation, UpdateOneMainCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneMainCategoryMutation, UpdateOneMainCategoryMutationVariables>(UpdateOneMainCategoryDocument, options);
      }
export type UpdateOneMainCategoryMutationHookResult = ReturnType<typeof useUpdateOneMainCategoryMutation>;
export type UpdateOneMainCategoryMutationResult = Apollo.MutationResult<UpdateOneMainCategoryMutation>;
export type UpdateOneMainCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateOneMainCategoryMutation, UpdateOneMainCategoryMutationVariables>;
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
export const OrdersDocument = gql`
    query Orders($where: OrderWhereInput, $orderBy: [OrderOrderByWithRelationInput!], $cursor: OrderWhereUniqueInput, $take: Int, $skip: Int, $distinct: [OrderScalarFieldEnum!]) {
  orders(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    createdAt
    id
    itemsPrePrice
    itemsPrice
    status
    taxPrice
    totalPrice
    orderItem {
      product {
        id
        images
        name
      }
      qty
      id
    }
    shippingPrice
    shippingAddress {
      id
      lat
      lng
      postalCode
      fullName
      country
      city
      address
    }
    user {
      email
      firstname
      lastname
      id
    }
    updatedAt
    itemsPrePricePaymentSessionId
    itemsTotalPricePaymentSessionId
  }
}
    `;

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
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
export function useOrdersQuery(baseOptions?: Apollo.QueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
      }
export function useOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
        }
export function useOrdersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
        }
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export type OrdersSuspenseQueryHookResult = ReturnType<typeof useOrdersSuspenseQuery>;
export type OrdersQueryResult = Apollo.QueryResult<OrdersQuery, OrdersQueryVariables>;
export const UpdateOneOrderDocument = gql`
    mutation UpdateOneOrder($data: OrderUpdateInput!, $where: OrderWhereUniqueInput!) {
  updateOneOrder(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateOneOrderMutationFn = Apollo.MutationFunction<UpdateOneOrderMutation, UpdateOneOrderMutationVariables>;

/**
 * __useUpdateOneOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOneOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneOrderMutation, { data, loading, error }] = useUpdateOneOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateOneOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneOrderMutation, UpdateOneOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneOrderMutation, UpdateOneOrderMutationVariables>(UpdateOneOrderDocument, options);
      }
export type UpdateOneOrderMutationHookResult = ReturnType<typeof useUpdateOneOrderMutation>;
export type UpdateOneOrderMutationResult = Apollo.MutationResult<UpdateOneOrderMutation>;
export type UpdateOneOrderMutationOptions = Apollo.BaseMutationOptions<UpdateOneOrderMutation, UpdateOneOrderMutationVariables>;
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
export const ProductsDocument = gql`
    query Products($where: ProductWhereInput, $orderBy: [ProductOrderByWithRelationInput!], $cursor: ProductWhereUniqueInput, $take: Int, $skip: Int, $distinct: [ProductScalarFieldEnum!]) {
  products(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    category {
      name
    }
    createdAt
    custom_product_status
    id
    images
    minimumOrderNeededToStart
    name
    orderStartPrice
    price
    type
    stock
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
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
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export function useProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsSuspenseQueryHookResult = ReturnType<typeof useProductsSuspenseQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const AggregateProductDocument = gql`
    query AggregateProduct($where: ProductWhereInput, $orderBy: [ProductOrderByWithRelationInput!], $cursor: ProductWhereUniqueInput, $take: Int, $skip: Int) {
  aggregateProduct(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
  ) {
    _count {
      _all
    }
  }
}
    `;

/**
 * __useAggregateProductQuery__
 *
 * To run a query within a React component, call `useAggregateProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useAggregateProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAggregateProductQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useAggregateProductQuery(baseOptions?: Apollo.QueryHookOptions<AggregateProductQuery, AggregateProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AggregateProductQuery, AggregateProductQueryVariables>(AggregateProductDocument, options);
      }
export function useAggregateProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AggregateProductQuery, AggregateProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AggregateProductQuery, AggregateProductQueryVariables>(AggregateProductDocument, options);
        }
export function useAggregateProductSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AggregateProductQuery, AggregateProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AggregateProductQuery, AggregateProductQueryVariables>(AggregateProductDocument, options);
        }
export type AggregateProductQueryHookResult = ReturnType<typeof useAggregateProductQuery>;
export type AggregateProductLazyQueryHookResult = ReturnType<typeof useAggregateProductLazyQuery>;
export type AggregateProductSuspenseQueryHookResult = ReturnType<typeof useAggregateProductSuspenseQuery>;
export type AggregateProductQueryResult = Apollo.QueryResult<AggregateProductQuery, AggregateProductQueryVariables>;
export const ProductForUpdateDocument = gql`
    query ProductForUpdate($where: ProductWhereUniqueInput!) {
  product(where: $where) {
    categoryId
    custom_product_status
    description
    id
    images
    minimumOrderNeededToStart
    name
    orderStartPrice
    shortdescription
    stock
    price
    type
    slug
    employeeId
    fetauresCategories {
      id
    }
    fetaures {
      id
      name
      value
      fetaurecategoryId
    }
    sizes
  }
}
    `;

/**
 * __useProductForUpdateQuery__
 *
 * To run a query within a React component, call `useProductForUpdateQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductForUpdateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductForUpdateQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProductForUpdateQuery(baseOptions: Apollo.QueryHookOptions<ProductForUpdateQuery, ProductForUpdateQueryVariables> & ({ variables: ProductForUpdateQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductForUpdateQuery, ProductForUpdateQueryVariables>(ProductForUpdateDocument, options);
      }
export function useProductForUpdateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductForUpdateQuery, ProductForUpdateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductForUpdateQuery, ProductForUpdateQueryVariables>(ProductForUpdateDocument, options);
        }
export function useProductForUpdateSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductForUpdateQuery, ProductForUpdateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductForUpdateQuery, ProductForUpdateQueryVariables>(ProductForUpdateDocument, options);
        }
export type ProductForUpdateQueryHookResult = ReturnType<typeof useProductForUpdateQuery>;
export type ProductForUpdateLazyQueryHookResult = ReturnType<typeof useProductForUpdateLazyQuery>;
export type ProductForUpdateSuspenseQueryHookResult = ReturnType<typeof useProductForUpdateSuspenseQuery>;
export type ProductForUpdateQueryResult = Apollo.QueryResult<ProductForUpdateQuery, ProductForUpdateQueryVariables>;
export const UpdateOneProductDocument = gql`
    mutation UpdateOneProduct($data: ProductUpdateInput!, $where: ProductWhereUniqueInput!) {
  updateOneProduct(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateOneProductMutationFn = Apollo.MutationFunction<UpdateOneProductMutation, UpdateOneProductMutationVariables>;

/**
 * __useUpdateOneProductMutation__
 *
 * To run a mutation, you first call `useUpdateOneProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneProductMutation, { data, loading, error }] = useUpdateOneProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateOneProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneProductMutation, UpdateOneProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneProductMutation, UpdateOneProductMutationVariables>(UpdateOneProductDocument, options);
      }
export type UpdateOneProductMutationHookResult = ReturnType<typeof useUpdateOneProductMutation>;
export type UpdateOneProductMutationResult = Apollo.MutationResult<UpdateOneProductMutation>;
export type UpdateOneProductMutationOptions = Apollo.BaseMutationOptions<UpdateOneProductMutation, UpdateOneProductMutationVariables>;
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
  adminRefreshToken
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