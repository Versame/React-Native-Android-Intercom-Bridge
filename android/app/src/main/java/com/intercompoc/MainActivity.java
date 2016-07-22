package com.intercompoc;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.robinpowered.react.Intercom.IntercomPackage;

import io.intercom.android.sdk.Intercom;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intercom.initialize(getApplication(), "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "xxxxxx");
    }

    @Override
    protected String getMainComponentName() {
        return "intercomPOC";
    }
}
