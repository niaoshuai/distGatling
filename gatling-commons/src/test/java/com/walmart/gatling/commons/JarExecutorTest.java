package com.walmart.gatling.commons;

import org.apache.commons.exec.CommandLine;
import org.apache.commons.exec.DefaultExecutor;
import org.junit.Test;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.*;

public class JarExecutorTest {


    @Test
    public void testGetScriptCommand(){
        CommandLine cmdLine = new CommandLine("/home/niaoshuai/gatling-charts-highcharts-bundle-3.0.2/bin/gatling.sh");
        cmdLine.addArgument("-sf").addArgument("/home/niaoshuai/agentTmp");
        cmdLine.addArgument("-s").addArgument("computerdatabase.BasicSimulation");
        Map<String, String> substitutionMap = new HashMap<>(2);
        substitutionMap.put("JAVA_OPTS","-Dusers=10 -Dramp=100");
        cmdLine.setSubstitutionMap(substitutionMap);

        DefaultExecutor executor = new DefaultExecutor();
        try {
            final int execute = executor.execute(cmdLine);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}