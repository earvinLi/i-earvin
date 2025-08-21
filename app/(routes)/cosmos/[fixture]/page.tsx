// External Dependencies
import { nextCosmosPage, nextCosmosStaticParams } from 'react-cosmos-next';

// Internal Dependencies
import * as cosmosImports from '../../../../cosmos.imports';

export const generateStaticParams = nextCosmosStaticParams(cosmosImports);

export default nextCosmosPage(cosmosImports);
