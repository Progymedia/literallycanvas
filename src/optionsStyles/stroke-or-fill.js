import createReactClass from "../reactGUI/createReactClass-shim";
import React from "../reactGUI/React-shim";
import { defineOptionsStyle } from "./optionsStyles";
import createSetStateOnEventMixin from "../reactGUI/createSetStateOnEventMixin";
import { _ } from "../core/localization";


defineOptionsStyle("stroke-or-fill", createReactClass({
    displayName: "StrokeOrFillPicker",
    getState: function() { return {strokeOrFill: "stroke"} },
    getInitialState: function() { return this. getState() },
    mixins: [createSetStateOnEventMixin("toolChange")],

    onChange: function(e) {
        if (e.target.id == "stroke-or-fill-stroke") {
            this.props.lc.tool.strokeOrFill = "stroke";
        } else {
            this.props.lc.tool.strokeOrFill = "fill";
        }
        this.setState(this.getState());
    },

    render: function() {
        const lc = this.props.lc;

        return <form>
            <span> {_("Color to change:")} </span>
            <span>
                <input type="radio" name="stroke-or-fill" value="stroke"
                    id="stroke-or-fill-stroke" onChange={this.onChange}
                    checked={lc.tool.strokeOrFill == "stroke"} />
                <label htmlFor="stroke-or-fill-stroke" className="label"> {_("stroke")}</label>
            </span>
            <span>
                <input type="radio" name="stroke-or-fill" value="fill"
                    id="stroke-or-fill-fill" onChange={this.onChange}
                    checked={lc.tool.strokeOrFill == "fill"} />
                <label htmlFor="stroke-or-fill-fill" className="label"> {_("fill")}</label>
            </span>
        </form>;
    }
}));