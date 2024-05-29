package new

import (
	"path/filepath"
	"strings"

	"github.com/jzero-io/jzero/embeded"
	"github.com/jzero-io/jzero/pkg/templatex"
)

type JzeroCmd struct {
	TemplateData TemplateData
	AppDir       string
}

func (jc *JzeroCmd) New() error {
	cmdDir := embeded.ReadTemplateDir(filepath.Join("jzero", "app", "cmd"))
	for _, file := range cmdDir {
		if file.IsDir() {
			continue
		}
		cmdFileBytes, err := templatex.ParseTemplate(jc.TemplateData, embeded.ReadTemplateFile(filepath.Join("jzero", "app", "cmd", file.Name())))
		if err != nil {
			return err
		}
		cmdFileName := strings.TrimSuffix(file.Name(), ".tpl")
		err = checkWrite(filepath.Join(Output, jc.AppDir, "cmd", cmdFileName), cmdFileBytes)
		if err != nil {
			return err
		}
	}
	return nil
}
