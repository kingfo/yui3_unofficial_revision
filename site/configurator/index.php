<?php
$title="The YUI Configurator";
$section="yui3configurator";
$highlightSyntax = true;
$prepend='
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.5.1/build/assets/skins/sam/skin.css">
    <style type="text/css">
        .panel {
            border:1px solid #D9D9D9;
            margin:1em 0 1em 0;
        }
        .panel .hd {
            background-color:#6C8EA1;
            color: #fff;
            font-weight:bold;
            font-size:108%;
            padding:5px;
        }
        .panel .bd {
            background:#F2FBFF url(../assets/gradient-promo.png) repeat-x scroll 0 0;
            padding:5px;
        }
        .modList {
            margin: 1em;
        }
        .modList li {
            list-style-type: none;
            padding-top: 2px;
            padding-bottom: 2px;
        }
        .modList li.yui-hover {
            background-color:#6C8EA1;
            color:#ffffff;
            cursor:pointer;
        }
        .modList li .size {
            font-size:85%;
            color:#aaa;
        }
        #config label {
            margin-right: 2em;
        }
	</style>';
include "../inc/header.inc";
?>

<div id="yui-main">
    <div class="yui-b">
        <div id="main">
            <h2>YUI Configurator</h2>
            <div id="configurator" class="yui-gc">
                <div class="yui-u first">
                    <div id="config" class="panel">
                        <div class="hd">Options</div>
                        <div class="bd">
                            <p>
                                <label><input type="checkbox" id="rollup" checked /> Allow Rollups</label>
                                <label><input type="checkbox" id="optional" checked /> Load Optional</label>
                                <label><input type="checkbox" id="combo" checked /> Use Combo Handler</label>
                            </p>
                            <p>
                                <label> File Type: <select id="fileType">
                                <option value="min" selected> Min </option>
                                <option value="raw"> Full </option>
                                <option value="debug"> Debug </option>
                                </select>
                                </label>
                                <label>Base Path: <input type="text" id="base" value="" disabled/></label>
                            </p>
                        </div>
                    </div>
                    <div class="yui-g first">
                        <div class="yui-u first">
                            <div id="modPanel" class="panel">
                                <div class="hd">Modules</div>
                                <div class="bd">
                                    <ul id="mods" class="modList"></ul>
                                    <div id="modDesc" class="desc"></div>
                                </div>
                            </div>
                        </div>
                        <div class="yui-u">
                            <div id="subModPanel" class="panel">
                                <div class="hd">Sub Modules</div>
                                <div class="bd">
                                    <ul id="subMods" class="modList"></ul>
                                    <div id="subModDesc" class="desc"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="yui-u">
                    <div id="resources" class="panel">
                        <div class="hd">Options</div>
                        <div class="bd">
                            <textarea class="HTML" cols="60" rows="1" id="loaderOutput" name="loaderOutput">
                            </textarea>
                        </div>
                    </div>
                    <div id="weight" class="panel">
                        <div class="hd" id="total"></div>
                        <div id="chart" class="bd"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript" src="../../build/yui/yui-min.js"></script> 

<script type="text/javascript" src="http://yui.yahooapis.com/2.5.2/build/utilities/utilities.js"></script> 
<script type="text/javascript" src="http://yui.yahooapis.com/2.5.2/build/selector/selector-beta-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.5.2/build/json/json-min.js"></script> 
<script type="text/javascript" src="http://yui.yahooapis.com/2.5.2/build/datasource/datasource-beta-min.js"></script> 
<script type="text/javascript" src="http://yui.yahooapis.com/2.5.2/build/charts/charts-experimental-min.js"></script> 

<script type="text/javascript" src="data.js"></script>
<script type="text/javascript" src="config.js"></script>

<?php include "../inc/side.inc" ?>
<?php include "../inc/footer.inc" ?>