/*
Copyright © 2024 jaronnie <jaron@jaronnie.com>
*/

package cmd

import (
	"github.com/spf13/cobra"

	"github.com/jzero-io/jzero/config"
	"github.com/jzero-io/jzero/internal/serverless/serverlessbuild"
	"github.com/jzero-io/jzero/internal/serverless/serverlessdelete"
	"github.com/jzero-io/jzero/internal/serverless/serverlessnew"
)

// serverlessCmd represents the serverless command
var serverlessCmd = &cobra.Command{
	Use:   "serverless",
	Short: "jzero serverless",
	Long:  `jzero serverless.`,
}

var serverlessNewCmd = &cobra.Command{
	Use:   "new",
	Short: "jzero serverless new",
	Long:  `jzero serverless new.`,
	RunE: func(cmd *cobra.Command, args []string) error {
		if config.C.Serverless.New.Module == "" {
			config.C.Serverless.New.Module = args[0]
		}
		return serverlessnew.Run(args)
	},
	Args: cobra.ExactArgs(1),
}

var serverlessBuildCmd = &cobra.Command{
	Use:   "build",
	Short: "jzero serverless build",
	Long:  `jzero serverless build.`,
	RunE: func(cmd *cobra.Command, args []string) error {
		return serverlessbuild.Run()
	},
}

var serverlessDeleteCmd = &cobra.Command{
	Use:   "delete",
	Short: "jzero serverless delete",
	Long:  `jzero serverless delete.`,
	RunE: func(cmd *cobra.Command, args []string) error {
		return serverlessdelete.Run()
	},
}

func init() {
	rootCmd.AddCommand(serverlessCmd)
	serverlessCmd.AddCommand(serverlessBuildCmd)
	serverlessCmd.AddCommand(serverlessDeleteCmd)
	serverlessCmd.AddCommand(serverlessNewCmd)

	serverlessNewCmd.Flags().BoolP("core", "", false, "is core serverless")
	serverlessNewCmd.Flags().StringP("module", "m", "", "set go module")
	serverlessNewCmd.Flags().StringP("home", "", "", "set templates path")
	serverlessNewCmd.Flags().StringP("remote", "r", "https://github.com/jzero-io/templates", "remote templates repo")
	serverlessNewCmd.Flags().StringP("branch", "b", "", "remote templates repo branch")
	serverlessNewCmd.Flags().StringP("frame", "", "api", "use frame")
	serverlessNewCmd.Flags().StringP("local", "", "", "local templates")
	serverlessNewCmd.Flags().StringP("style", "", "gozero", "The file naming format, see [https://github.com/zeromicro/go-zero/blob/master/tools/goctl/config/readme.md]")

	serverlessDeleteCmd.Flags().StringSliceP("plugin", "p", nil, "plugin name")
}
