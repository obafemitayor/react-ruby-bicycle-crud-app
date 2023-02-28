/**
 * @generated SignedSource<<959f017695ea7f946d8bbc24e7c5f4a4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DestroyBicycleMutationInput = {
  clientMutationId?: string | null;
  id: number;
};
export type DeleteBicycleMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DestroyBicycleMutationInput;
};
export type DeleteBicycleMutation$data = {
  readonly deleteBicycle: {
    readonly clientMutationId: string | null;
    readonly message: string;
    readonly deletedId: string;
  } | null;
};
export type DeleteBicycleMutation = {
  variables: DeleteBicycleMutation$variables;
  response: DeleteBicycleMutation$data;
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
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMutationId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "message",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "deletedId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteBicycleMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyBicycleMutationPayload",
        "kind": "LinkedField",
        "name": "deleteBicycle",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
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
    "name": "DeleteBicycleMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyBicycleMutationPayload",
        "kind": "LinkedField",
        "name": "deleteBicycle",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedId",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1b24787a4eb9296acd238317431a11e4",
    "id": null,
    "metadata": {},
    "name": "DeleteBicycleMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteBicycleMutation(\n  $input: DestroyBicycleMutationInput!\n) {\n  deleteBicycle(input: $input) {\n    clientMutationId\n    message\n    deletedId\n  }\n}\n"
  }
};
})();

(node as any).hash = "bb2c7887801351a17165b63f94570047";

export default node;
