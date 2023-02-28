/**
 * @generated SignedSource<<8dfa67ea679b83126aec60be2259b0de>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateBicycleMutationInput = {
  brand?: string | null;
  clientMutationId?: string | null;
  id: number;
  model?: string | null;
  quantity?: number | null;
  sizeCentimeters?: number | null;
};
export type UpdateBicycleMutation$variables = {
  input: UpdateBicycleMutationInput;
};
export type UpdateBicycleMutation$data = {
  readonly updateBicycle: {
    readonly bicycle: {
      readonly id: string;
      readonly brand: string | null;
      readonly model: string | null;
      readonly sizeCentimeters: number | null;
      readonly quantity: number | null;
    } | null;
    readonly clientMutationId: string | null;
    readonly error: string | null;
  } | null;
};
export type UpdateBicycleMutation = {
  variables: UpdateBicycleMutation$variables;
  response: UpdateBicycleMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateBicycleMutationPayload",
    "kind": "LinkedField",
    "name": "updateBicycle",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Bicycle",
        "kind": "LinkedField",
        "name": "bicycle",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "brand",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "model",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "sizeCentimeters",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "quantity",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateBicycleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateBicycleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b2d4671eb4f54c2306b64a9229481773",
    "id": null,
    "metadata": {},
    "name": "UpdateBicycleMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateBicycleMutation(\n  $input: UpdateBicycleMutationInput!\n) {\n  updateBicycle(input: $input) {\n    bicycle {\n      id\n      brand\n      model\n      sizeCentimeters\n      quantity\n    }\n    clientMutationId\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "6b9f305aacc2cc58545c8c054176a37e";

export default node;
