/**
 * @generated SignedSource<<e1c96b437cbc9b48f2a7772dc861faf0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Bicycle_bicycle$data = {
  readonly id: string;
  readonly brand: string | null;
  readonly model: string | null;
  readonly sizeCentimeters: number | null;
  readonly quantity: number | null;
  readonly " $fragmentType": "Bicycle_bicycle";
};
export type Bicycle_bicycle$key = {
  readonly " $data"?: Bicycle_bicycle$data;
  readonly " $fragmentSpreads": FragmentRefs<"Bicycle_bicycle">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Bicycle_bicycle",
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
  "type": "Bicycle",
  "abstractKey": null
};

(node as any).hash = "fc51d204efae5704796de472bb09d357";

export default node;
