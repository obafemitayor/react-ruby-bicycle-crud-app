/**
 * @generated SignedSource<<6df42d3ac80868094c03d51e16a53eb0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BicycleRow_bicycle$data = {
  readonly id: string;
  readonly brand: string | null;
  readonly model: string | null;
  readonly sizeCentimeters: number | null;
  readonly quantity: number | null;
  readonly " $fragmentType": "BicycleRow_bicycle";
};
export type BicycleRow_bicycle$key = {
  readonly " $data"?: BicycleRow_bicycle$data;
  readonly " $fragmentSpreads": FragmentRefs<"BicycleRow_bicycle">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BicycleRow_bicycle",
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

(node as any).hash = "7a38477713f30b1084c6d747ee469dd9";

export default node;
