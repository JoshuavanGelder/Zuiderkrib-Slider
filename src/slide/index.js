import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import meta from "./block.json";
const { name, icon } = meta;
export { meta, name };

const edit = () => {
	const blockProps = useBlockProps();

	const template = [
		["core/image",{},],
	];

	return (
		<div {...blockProps}>
			<InnerBlocks template={template} />
		</div>
	);
};

const save = () => {
	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
};

export const settings = { icon, edit, save };