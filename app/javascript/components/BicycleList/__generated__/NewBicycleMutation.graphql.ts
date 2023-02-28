/**
 * @generated SignedSource<<082122f987d99115c2c4a38681921267>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateBicycleMutationInput = {
  brand: string;
  clientMutationId?: string | null;
  model: string;
  quantity: number;
  sizeCentimeters: number;
};
export type NewBicycleMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateBicycleMutationInput;
};
export type NewBicycleMutation$data = {
  readonly createBicycle: {
    readonly bicycle: {
      readonly " $fragmentSpreads": FragmentRefs<"BicycleRow_bicycle">;
    } | null;
  } | null;
};
export type NewBicycleMutation = {
  variables: NewBicycleMutation$variables;
  response: NewBicycleMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NewBicycleMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateBicycleMutationPayload",
        "kind": "LinkedField",
        "name": "createBicycle",
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
                "args": null,
                "kind": "FragmentSpread",
                "name": "BicycleRow_bicycle"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NewBicycleMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateBicycleMutationPayload",
        "kind": "LinkedField",
        "name": "createBicycle",
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
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "bicycle",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "BicycleEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3555b1905bf72140bef0bc12cdf73221",
    "id": null,
    "metadata": {},
    "name": "NewBicycleMutation",
    "operationKind": "mutation",
    "text": "mutation NewBicycleMutation(\n  $input: CreateBicycleMutationInput!\n) {\n  createBicycle(input: $input) {\n    bicycle {\n      ...BicycleRow_bicycle\n      id\n    }\n  }\n}\n\nfragment BicycleRow_bicycle on Bicycle {\n  id\n  brand\n  model\n  sizeCentimeters\n  quantity\n}\n"
  }
};
})();

(node as any).hash = "3a5caabb089869972df2c93e69f73b36";

export default node;
