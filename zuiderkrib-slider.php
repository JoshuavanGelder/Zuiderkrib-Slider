<?php
/**
 * Plugin Name:       Zuiderkrib Slider
 * Description:       Slider voor images. (requires blossom feminine theme)
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       zuiderkrib-slider
 *
 * @package           slider
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function slider_zuiderkrib_slider_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'slider_zuiderkrib_slider_block_init' );
