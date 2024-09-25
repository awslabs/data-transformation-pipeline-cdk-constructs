#
# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance
# with the License. A copy of the License is located at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES
# OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions
# and limitations under the License.
#

import json
import logging
import sys
from .core import core
from .utils.job.objects import JobStatus
from .utils.logging import log

log.set_log_level(logging.INFO)

logger = log.get_logger()


def main():
    core.hello()

    logger.info(f"Arguments: {sys.argv}")

    # run core application
    response = core.run(json.loads(sys.argv[1]))

    # exit application with status
    exit_status = 0 if response.status is JobStatus.COMPLETE else 1
    exit(exit_status)


if __name__ == "__main__":
    main()
