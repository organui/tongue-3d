# Model provenance and preparation

## Source and license

The runtime model uses **BodyParts3D / Anatomography 4.3** (object set 4.3, ontology tree FMA3.0), retrieved **2026-10-16**. All selected OBJ headers report compatibility version 4.3.

The original service explicitly permits modification and redistribution of contour data and rendered images under **[CC BY-SA 2.1 Japan](https://creativecommons.org/licenses/by-sa/2.1/jp/deed.en)** ([legal text](https://creativecommons.org/licenses/by-sa/2.1/jp/legalcode)). An inert [snapshot of that notice](model-source/original-license.html.txt), copied from the lungs explorer's provenance record, is included. This license governs `public/models/tongue.glb`, the manifest's model data and the model screenshots, separately from the MIT application code. This follows the same choice as [lungs-3d](https://github.com/organui/lungs-3d), which also uses 4.3 data: the LSDB archive's CC BY 4.0 grant covers its 4.0 release and is not extended to these 4.3 meshes.

Credit: **BodyParts3D / Anatomography, © The Database Center for Life Science (DBCLS).** Adapted by OrganUI. No endorsement is implied.

## Retrieval and pinning

The network policy of the sandbox this was built in blocked both `dbarchive.biosciencedbc.jp` and `lifesciencedb.jp`, so the official archives could not be downloaded. Geometry comes from the public [olivercase/body_parts_3d_api](https://github.com/olivercase/body_parts_3d_api) mirror, pinned at commit `fd527e6f4daf732fd814314d9257df5877b844bc` (the same commit the lungs explorer pins).

Each OBJ is checked three ways:

1. Its SHA-256 matches the oid in its pinned Git LFS pointer (recorded per file in [model-inputs.json](../scripts/model-inputs.json)).
2. Its embedded `File ID` and `Concept ID` headers match.
3. That concept maps to that FJ element in the official 4.3 IS-A table, [`FMA2Obj-4.3.tsv`](model-source/FMA2Obj-4.3.tsv) (SHA-256 `c3d16c89…935d4f`). The table is the unchanged official download preserved by lungs-3d; `prepare-model.ts` refuses to run if its hash changes.

The official per-element metadata table (original model filenames) could not be fetched, so unlike lungs-3d it is not preserved here.

## Selected structures

| Structure | Source concept(s) | Elements |
| --- | --- | --- |
| Tongue | FMA54640 tongue | FJ2761 |
| Genioglossus | FMA46702 left, FMA46698 right | FJ2738, FJ2750 |
| Hyoglossus | FMA46704 left, FMA46703 right | FJ2739, FJ2751 |
| Geniohyoid | FMA46327 left, FMA46326 right | FJ1559, FJ1580 |
| Mylohyoid | FMA46322 left, FMA46321 right | FJ1562, FJ1583 |
| Hyoid bone | FMA52749 | FJ2772 |
| Epiglottis | FMA55130 | FJ2770 |
| Submandibular glands | FMA59803 left, FMA59802 right | FJ2766, FJ2768 |
| Sublingual glands | FMA59805 left, FMA59804 right | FJ2765, FJ2767 |
| Hypoglossal nerves | FMA80483 left trunk, FMA80482 right trunk | FJ3941, FJ4027 |
| Lingual nerves | FMA80512 left trunk, FMA80511 right trunk | FJ3949, FJ3984 |
| Lingual artery | FMA66447 trunk, FMA49535 third part, FMA49544 sublingual artery (all right) | FJ5117, FJ5074, FJ5190 |
| Lingual veins | FMA52565 lingual, FMA50831 deep lingual, FMA50837 sublingual (all right) | FJ4996, FJ5075, FJ5191 |

25 elements, 48,620 triangles. Each element belongs to exactly one structure; the script refuses duplicates and unused inputs. Per-element hashes, sizes and counts are in the [manifest](../public/models/manifest.json) and [selected-mappings.tsv](model-source/selected-mappings.tsv).

Decisions:

- **One tongue surface.** The source has a single, coarse tongue mesh (524 triangles) and no separate intrinsic muscles, papillae, tonsil or oral and pharyngeal parts, so those cannot be selected. The genioglossus and hyoglossus run inside it and are shown through it when selected.
- **Duplicate surfaces.** FMA52749 (hyoid bone) maps to FJ2772 and FJ3201, and FMA59805 (left sublingual gland) to FJ2765 and FJ4643. In each pair the two files have the same bounds and triangle count, so rendering both would z-fight. The lower element ID is used.
- **Paired structures are grouped.** Left and right muscles, glands and nerves are one selectable set each.
- **Right-sided vessels only.** The mirror has lingual vessels for the right side only. The left side is not mirrored or invented.
- **Nerve trunks.** The hypoglossal nerve trunks run from the skull base, so they extend well above and behind the tongue.
- Omitted: the styloglossus and palatoglossus (no mesh in the mirror), the mandible (it would hide the tongue from the front and side), the palate, pharynx, larynx apart from the epiglottis, the glossopharyngeal nerve and smaller vessels.

## Transformation and orientation

Vertices are recentred on the selection's source bounding box and uniformly scaled by `0.034`; axes change from source `[x, y, z]` to display `[x, z, -y]` (source +x patient left, −y anterior, +z superior). The explorer opens in the left lateral view, looking from the patient's left along display −X, with the tip of the tongue on the viewer's left. The anterior view looks along display −Z, and the superior view looks down on the dorsum of the tongue from above and slightly in front. In the superior view the right-sided lingual artery is on the viewer's left, as expected. No anatomical reshaping or decimation is performed.

## Reproduce

```sh
bun run prepare:model   # downloads missing OBJs into .asset-cache/objs, verifies, writes the GLB and manifest
bun run verify:model    # checks the GLB hash, structure IDs, element lists and geometry
```
